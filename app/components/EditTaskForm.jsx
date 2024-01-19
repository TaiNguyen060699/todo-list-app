import React, { useState } from "react";

const EditTaskForm = ({ task, onEdit, onClose }) => {
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, editedText);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-auto md:w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;
