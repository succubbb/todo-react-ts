import React from 'react';
import TodoItem from './TodoItem.tsx';

const TasksList: React.FC = () => {
  const todos = [
    {
      id: '1',
      title: 'New Task',
      isComplete: true,
    },
    {
      id: '2',
      title: 'New Task1',
      isComplete: false,
    },
    {
      id: '3',
      title: 'New Task2',
      isComplete: false,
    },
  ];

  return (
    <>
      <div className="text-left pt-2 pl-1 text-[11px] text-gray-700">
        You have * pending tasks
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TasksList;
