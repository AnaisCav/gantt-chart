const AddRow = ({ totalWidth, onClick }) => {
  return (
    <div
      className="flex border-b border-dashed border-gray-300 transition-colors hover:bg-indigo-50 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-48 md:w-64 flex-shrink-0 bg-gray-100 border-r border-gray-300 h-10 flex items-center p-2 text-sm text-gray-500">
        + Add new Task
      </div>

      <div
        className="flex-grow h-10 relative flex items-center justify-center text-gray-400 text-sm p-2 border hover:border-2 border-dashed border-gray-400 hover:border-[#45B1A5] rounded-md"
        style={{ width: `${totalWidth}px` }}
      >
        <span>Click here to add a task</span>
      </div>
    </div>
  );
};

export default AddRow;
