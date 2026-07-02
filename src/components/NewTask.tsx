import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const NewTask: React.FC = () => {
  return (
    <>
      <div className="font-bold text-left p-1">New Task</div>
      <hr className="w-full border border-[#e7e7e9]"></hr>
      <div className="flex items-center h-5 w-full px-2 max-w-md text-sm text-gray-500 bg-[#ece4db] border border-gray-500/30 rounded-xl">
        <input
          id="add"
          className="outline-none bg-transparent h-full w-full text-[10px]"
          type="text"
          placeholder="Add New Task"
        />
        <PlusCircleIcon className="size-4 text-gray-500" />
      </div>
    </>
  );
};

export default NewTask;
