import { useState } from "react";
import GanttChart from "./components/GanttChart";
import SideBar from "./components/SideBar";
import { INITIAL_TASKS_DATA, INITIAL_PROJECT_NAME } from "./data/mockData";

const App = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS_DATA);
  const [chartName, setChartName] = useState(INITIAL_PROJECT_NAME);

  const getNextId = (tasks) => Math.max(...tasks.map((t) => t.id), 0) + 1;

  const addTask = (newTaskData) => {
    const newId = getNextId(tasks);

    const newTask = {
      id: newId,
      name: newTaskData.name,
      start: newTaskData.start,
      end: newTaskData.end,
      progress: 0,
      color: "bg-gray-500",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="flex min-h-screen bg-[#E3E8EF]">
      <SideBar currentName={chartName} onNameChange={setChartName} />

      <div className="flex-grow p-4 md:p-8 overflow-hidden">
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">
          {chartName}
        </h1>

        <GanttChart tasks={tasks} onAddTask={addTask} />
      </div>
    </div>
  );
};

export default App;
