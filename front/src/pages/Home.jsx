import React from 'react';
import './Home.css';
import TaskCard from '../components/TaskCard';

const Home = () => {
      return (
            <div className='home'>
                  <h1 className='home-h1'>To-Do Task Application</h1>
                  <div className='home-content'>
                        <div className='home-content-left'>
                              <h3 className=''>Add Task</h3>
                              <form className='form' action="">
                                    <div>
                                          <p>Title</p>
                                          <input
                                                type="text"
                                                placeholder='e.g., Buy groceries'
                                                required />
                                    </div>

                                    <div>
                                          <p>Description</p>
                                          <textarea
                                                type="text"
                                                placeholder='e.g., Milk, eggs, bread for the week'
                                                required >

                                          </textarea>


                                    </div>
                                    <button>
                                          Add Task
                                    </button>
                              </form>


                        </div>
                        <div className='home-content-right'>
                              <h3 className=''>Recent Tasks</h3>
                              <TaskCard />
                        </div>
                  </div>
            </div>
      );
}

export default Home;
