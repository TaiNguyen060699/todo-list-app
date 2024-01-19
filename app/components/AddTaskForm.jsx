import React, { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 focus:outline-none"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
