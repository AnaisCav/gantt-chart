import React, { useState } from "react";
import GanttChart from "./components/GanttChart";
import SideBar from "./components/SideBar";
import {
  INITIAL_TASKS_DATA,
  START_DATE_REFERENCE,
  END_DATE_REFERENCE,
  INITIAL_PROJECT_NAME,
} from "./data/mockData";

const PIXELS_PER_DAY = 50;

// Fonction utilitaire pour trouver le prochain ID (pour éviter la répétition)
const getNextId = (tasks) => Math.max(...tasks.map((t) => t.id), 0) + 1;

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS_DATA);
  const [diagramName, setDiagramName] = useState(INITIAL_PROJECT_NAME);

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
      <SideBar currentName={diagramName} onNameChange={setDiagramName} />

      <div className="flex-grow p-4 md:p-8 overflow-hidden">
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">
          {diagramName}
        </h1>

        <GanttChart
          tasks={tasks}
          startDateRef={START_DATE_REFERENCE}
          endDateRef={END_DATE_REFERENCE}
          pixelsPerDay={PIXELS_PER_DAY}
          onAddTask={addTask}
        />
      </div>
    </div>
  );
}

export default App;
