import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function AddTaskModal({ open, onClose, onSave }) {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({ name: taskName, start: startDate, end: endDate });

    setTaskName("");
    setStartDate("");
    setEndDate("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in/50"
      />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-md data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:outline dark:-outline-offset-1 dark:outline-white/10"
          >
            <form onSubmit={handleSubmit}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900 mb-8 text-center"
                    >
                      Add New Task
                    </DialogTitle>

                    <div className="mt-4 space-y-4">
                      <div>
                        <label
                          htmlFor="task-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Name
                        </label>
                        <input
                          id="task-name"
                          type="text"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm"
                          placeholder="e.g. Design Wireframes"
                          required
                        />
                      </div>

                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label
                            htmlFor="start-date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Start Date
                          </label>
                          <input
                            id="start-date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="end-date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            End Date
                          </label>
                          <input
                            id="end-date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-[#45B1A5] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#34968b] sm:ml-3 sm:w-auto"
                >
                  Add Task
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
