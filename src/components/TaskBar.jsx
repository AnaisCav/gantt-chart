const TaskBar = ({ task, startDateRef, pixelsPerDay, onTaskClick }) => {
  const oneDayInMS = 1000 * 60 * 60 * 24;

  const getDaysDifference = (date1, date2) => {
    const diffTime = new Date(date1).getTime() - new Date(date2).getTime();
    return Math.round(diffTime / oneDayInMS);
  };

  const offsetDays = getDaysDifference(task.start, startDateRef);
  const left = offsetDays * pixelsPerDay;

  const durationDays = getDaysDifference(task.end, task.start) + 1;
  const width = durationDays * pixelsPerDay;

  const progressWidth = (task.progress / 100) * width;

  return (
    <div
      className="absolute h-6 rounded-md shadow-lg cursor-pointer transition-all duration-100 hover:opacity-100 opacity-90"
      style={{ left: `${left}px`, width: `${width}px` }}
      title={`${task.name} (${task.start} - ${task.end}) - ${task.progress}%`}
      onClick={() => onTaskClick(task)}
    >
      <div
        className={`h-full rounded-md ${task.color} text-sm font-semibold text-white flex items-center px-2 relative overflow-hidden`}
      >
        <div
          className="absolute top-0 left-0 h-full bg-black bg-opacity-20 rounded-l-md"
          style={{ width: `${progressWidth}px` }}
        />
        <span className="z-10 text-xs truncate">{task.name}</span>
      </div>
    </div>
  );
};

export default TaskBar;
