import './Home.css';
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

      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            await taskService.createTask({ title, description });
            setTitle('');
            setDescription('');
            fetchTask();
            alert('task add succeses..!')
      };

      const handleDone = async (id) => {
            await taskService.markDone(id);
            fetchTask();
      };

      useEffect(() => {
            fetchTask();
      }, [])

      return (
            <div className='home'>
                  <h1 className='home-h1'>To-Do Task Application</h1>
                  <div className='home-content'>
                        <div className='home-content-left'>
                              <h3 className=''>Add Task</h3>
                              <form className='form' onSubmit={handleSubmit} action="">
                                    <div>
                                          <p>Title *</p>
                                          <input
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                                type="text"
                                                placeholder='e.g., Buy groceries'
                                                required
                                          />
                                    </div>

                                    <div>
                                          <p>Description *</p>
                                          <textarea
                                                value={description}
                                                onChange={e => setDescription(e.target.value)}
                                                type="text"
                                                placeholder='e.g., Milk, eggs, bread for the week'
                                                required >
                                          </textarea>

                                    </div>
                                    <button type='submit'>
                                          Add Task
                                    </button>
                              </form>

                        </div>
                        <div className='home-content-right'>
                              <h3 className=''>Recent Tasks</h3>

                              {Array.isArray(tasks) && tasks.map(task => (
                                    <TaskCard key={task.id} task={task} onDone={handleDone} />
                              ))}

                        </div>
                  </div>
            </div>
      );
}

export default Home;
