import React, { useState } from "react";
import EditTaskForm from "./EditTaskForm";

const Task = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <li className="bg-white p-4 mb-4 rounded shadow-lg flex items-center justify-between">
      <span
        className={`flex-1 ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <div className="flex items-center">
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 focus:outline-none"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded mr-2 hover:bg-red-600 focus:outline-none"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 focus:outline-none"
          onClick={() => onToggleComplete(task.id)}
        >
          Done
        </button>
      </div>
      {isEditing && (
        <EditTaskForm task={task} onEdit={onEdit} onClose={handleEditClose} />
      )}
    </li>
  );
};

export default Task;
