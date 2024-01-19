"use client";
import React, { useState, useEffect } from "react";
import TaskList from "@/app/components/TaskList";
import AddTaskForm from "@/app/components/AddTaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    // Set loading to false after tasks are loaded
    setLoading(false);
  }, []);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    updateTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );

    updateTasks(updatedTasks);
  };

  const updateTasks = (newTasks) => {
    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Todo App</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <AddTaskForm onAdd={addTask} />
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
            onEdit={editTask}
          />
        </>
      )}
    </div>
  );
};

export default Home;
