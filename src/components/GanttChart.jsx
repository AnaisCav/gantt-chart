import { useState } from "react";
import TaskBar from "./TaskBar";
import ModalTaskDetails from "./ModalTaskDetails";
import AddRow from "./AddRow";
import AddTaskModal from "./AddTaskModal";

const GanttChart = ({
  tasks,
  startDateRef,
  endDateRef,
  pixelsPerDay,
  onAddTask,
}) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskDetailsModalOpen, setIsTaskDetailsModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const openTaskDetailsModal = (task) => {
    setSelectedTask(task);
    setIsTaskDetailsModalOpen(true);
  };

  const closeTaskDetailsModal = () => {
    setIsTaskDetailsModalOpen(false);
  };

  const closeAddTaskModal = () => {
    setIsAddTaskModalOpen(false);
  };

  const generateDayNumbers = (start, end) => {
    const days = [];
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      days.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };
  const allDayNumbers = generateDayNumbers(startDateRef, endDateRef);
  const totalWidth = allDayNumbers.length * pixelsPerDay;

  return (
    <>
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-xl">
        <div className="flex">
          <div className="w-48 md:w-64 flex-shrink-0 bg-gray-100 border-r border-gray-300">
            <div className="h-10 p-2 font-bold text-sm text-gray-700 border-b border-gray-300 flex items-center">
              Task Name
            </div>

            {tasks.map((task) => (
              <div
                key={task.id}
                className="h-10 p-2 border-b border-gray-200 text-sm flex items-center bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => openTaskDetailsModal(task)}
              >
                {task.name}
              </div>
            ))}
          </div>

          <div className="flex-grow overflow-x-auto">
            <div
              className="h-10 flex border-b border-gray-300 sticky top-0 bg-white z-20"
              style={{ width: `${totalWidth}px` }}
            >
              {allDayNumbers.map((dayNum, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center border-r border-gray-200 text-xs text-gray-500"
                  style={{ width: `${pixelsPerDay}px` }}
                >
                  {dayNum}
                </div>
              ))}
            </div>

            <div className="relative" style={{ width: `${totalWidth}px` }}>
              <div className="absolute top-0 bottom-0 flex z-0">
                {allDayNumbers.map((_, index) => (
                  <div
                    key={index}
                    className="border-r border-dashed border-gray-100"
                    style={{ width: `${pixelsPerDay}px` }}
                  />
                ))}
              </div>

              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="h-10 border-b border-gray-100 relative"
                >
                  <TaskBar
                    task={task}
                    startDateRef={startDateRef}
                    pixelsPerDay={pixelsPerDay}
                    onTaskClick={openTaskDetailsModal}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <AddRow
          totalWidth={totalWidth}
          onClick={() => setIsAddTaskModalOpen(true)}
        />
      </div>

      <ModalTaskDetails
        open={isTaskDetailsModalOpen}
        onClose={closeTaskDetailsModal}
        task={selectedTask}
      />

      <AddTaskModal
        open={isAddTaskModalOpen}
        onClose={closeAddTaskModal}
        onSave={onAddTask}
      />
    </>
  );
};

export default GanttChart;
