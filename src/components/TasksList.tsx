import React, { useState } from 'react';
import TodoItem from './TodoItem.tsx';
import { Todo } from '../types';

const initialTodos: Todo[] = [
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

const TasksList: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const pendingCount = todos.filter((todo) => !todo.isComplete).length;

  return (
    <>
      <div className="text-left pt-2 pl-1 text-[11px] text-gray-700">
        You have {pendingCount} pending {pendingCount === 1 ? 'task' : 'tasks'}
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </>
  );
};

export default TasksList;
