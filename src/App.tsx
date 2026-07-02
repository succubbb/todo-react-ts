import NewTask from './components/NewTask.tsx';
import TasksList from './components/TasksList.tsx';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8e2dc]">
      <div className="bg-[#e8e8e4] rounded-lg p-6 shadow-lg max-w-md w-full">
        <NewTask />
        <TasksList />
      </div>
    </div>
  );
};
export default App;
