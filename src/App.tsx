import React, { useState } from 'react';
import NewTask from './components/NewTask.tsx';
import TasksList from './components/TasksList.tsx';
import { AddTodo, Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(), // ← генерируем уникальный id
      title: text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8e2dc]">
      <div className="bg-[#e8e8e4] rounded-lg p-6 shadow-lg max-w-md w-full">
        <NewTask addTodo={addTodo} />

        {todos.length > 0 && (
          <TasksList
            todos={todos}
            toggleTodo={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
      </div>
    </div>
  );
};

export default App;
