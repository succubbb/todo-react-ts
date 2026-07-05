import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { DeleteTodo, Todo, ToggleTodo } from '../types';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  onDelete?: DeleteTodo;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, onDelete }) => {
  return (
    <div className="flex items-center h-5 w-full max-w-md text-sm text-gray-500 bg-[#ece4db] mt-1 border border-gray-500/30 rounded-xl px-2">
      <input
        type="checkbox"
        id="item"
        checked={todo.isComplete}
        onChange={() => {
          toggleTodo(todo.id);
        }}
        className="size-2.5 cursor-pointer mr-3"
      />

      <span
        className={
          todo.isComplete
            ? 'line-through text-gray-400 text-[10px]'
            : 'text-[10px]'
        }
      >
        {todo.title}
      </span>

      <button
        type="button"
        className="h-full cursor-pointer ml-auto"
        onClick={() => onDelete?.(todo.id)}
      >
        <TrashIcon className="size-3 text-gray-500 hover:text-gray-700 transition-colors" />
      </button>
    </div>
  );
};
export default TodoItem;
