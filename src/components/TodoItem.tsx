import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TodoItemProps {
  todo: Todo; // компонент принимает пропс todo типа Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="flex items-center h-5 w-full max-w-md text-sm text-gray-500 bg-[#ece4db] mt-1 border border-gray-500/30 rounded-xl px-2">
      <input
        type="checkbox"
        id="item"
        checked={todo.isComplete}
        onChange={() => {}}
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
      {/*{todo.isComplete && <CheckIcon className="w-3.5 h-3.5 text-white" />}*/}
      {/*<CheckIcon className="size-3 text-gray-500" />*/}

      <button
        type="button"
        className="h-full hover:bg-gray-100 cursor-pointer ml-auto"
      >
        <TrashIcon className="size-3 text-gray-500" />
      </button>
    </div>
  );
};
export default TodoItem;
