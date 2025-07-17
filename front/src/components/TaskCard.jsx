const TaskCard = ({ task, onDone }) => {
      return (
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 shadow-sm border border-gray-200 mb-4">
                  <div className="flex-grow">
                        <div className="text-lg font-medium text-gray-800">
                              {task.title}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                              {task.description}
                        </div>
                  </div>
                  <button
                        className="ml-4 px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-sm border-none cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500"
                        onClick={() => onDone(task.id)}
                  >
                        Done
                  </button>
            </div>
      );
};

export default TaskCard;
