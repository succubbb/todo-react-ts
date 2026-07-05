import React from 'react';
import TodoItem from './TodoItem.tsx';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  onDelete: (id: string) => void;
}

const TasksList: React.FC<Props> = ({ todos, toggleTodo, onDelete }) => {
  const pendingCount = todos.filter((todo) => !todo.isComplete).length;

  return (
    <>
      <div className="text-left pt-2 pl-1 text-[11px] text-gray-700">
        You have {pendingCount} pending {pendingCount === 1 ? 'task' : 'tasks'}
      </div>

      <div className="space-y-2 mt-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TasksList;
