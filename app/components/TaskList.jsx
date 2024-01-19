import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
