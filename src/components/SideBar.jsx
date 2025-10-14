const SideBar = ({ currentName, onNameChange }) => {
  return (
    <div className="w-64 flex-shrink-0 p-4 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">
        Diagram Settings
      </h2>

      <div className="mb-6">
        <label
          htmlFor="diagram-name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Project Name
        </label>

        <input
          id="diagram-name"
          type="text"
          value={currentName}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 text-sm"
          placeholder="Enter project name..."
        />
      </div>
    </div>
  );
};

export default SideBar;
