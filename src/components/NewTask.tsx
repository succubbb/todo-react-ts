import React, { useState } from 'react';
import { AddTodo } from '../types';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  addTodo: AddTodo;
}

const NewTask: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText(''); // очищаем поле
    }
  };

  return (
    <>
      <div className="font-bold text-left p-1">New Task</div>
      <hr className="w-full border border-gray-300 mb-1.5" />
      <form
        onSubmit={handleSubmit}
        className="flex items-center h-5 w-full px-2 max-w-md text-sm text-gray-500 bg-[#ece4db] border border-gray-500/30 rounded-xl"
      >
        <input
          id="add"
          className="outline-none bg-transparent h-full w-full text-[10px] py-1"
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="shrink-0 ml-auto rounded transition-colors"
        >
          <PlusCircleIcon className="size-4 text-gray-500 hover:text-gray-700 transition-colors" />
        </button>
      </form>
    </>
  );
};

export default NewTask;
