import TaskCard from '../components/TaskCard';
import taskService from '../services/TaskService';
import { useEffect, useState } from 'react';

const Home = () => {
      const [title, setTitle] = useState('');
      const [tasks, setTasks] = useState([]);
      const [description, setDescription] = useState('');

      const fetchTask = async () => {
            const data = await taskService.getTasks();
            console.log('Fetched tasks:', data);
            setTasks(data);
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            await taskService.createTask({ title, description });
            setTitle('');
            setDescription('');
            fetchTask();
            alert('Task added successfully!');
      };

      const handleDone = async (id) => {
            await taskService.markDone(id);
            fetchTask();
      };

      useEffect(() => {
            fetchTask();
      }, []);

      return (
            <div className="min-h-screen p-10 bg-gray-100">
                  {/* <h1 className="text-4xl text-center mb-8 text-gray-800 font-bold">Your Task</h1> */}

                  <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md">
                        {/* Left  */}
                        <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-300">

                              <h3 className="text-2xl mb-6 text-blue-600 font-semibold">Add Task</h3>

                              <form className="space-y-5" onSubmit={handleSubmit}>

                                    <div>
                                          <p className="ml-5 mb-1 flex pl-2 font-medium text-gray-600">Title *</p>
                                          <input
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                                type="text"
                                                placeholder="e.g., Buy groceries"
                                                required
                                                className="w-[90%] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                          />
                                    </div>

                                    <div>
                                          <p className="ml-5 flex mb-1 pl-2 font-medium text-gray-600">Description *</p>
                                          <textarea
                                                value={description}
                                                onChange={e => setDescription(e.target.value)}
                                                placeholder="e.g., Milk, eggs, bread for the week"
                                                required
                                                className="w-[90%] h-24 px-4 py-2 border border-gray-300 rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                          ></textarea>

                                    </div>

                                    <button
                                          type="submit"
                                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                          Add Task
                                    </button>

                              </form>
                        </div>

                        {/* Right  */}
                        <div className="flex-1 p-8">
                              <h3 className="text-2xl mb-6 text-blue-600 font-semibold">Recent Tasks</h3>
                              {Array.isArray(tasks) &&
                                    tasks.map((task) => (
                                          <TaskCard key={task.id} task={task} onDone={handleDone} />
                                    ))}
                        </div>
                  </div>
            </div>
      );
};

export default Home;
