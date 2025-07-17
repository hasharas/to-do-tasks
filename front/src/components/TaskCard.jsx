
import './TaskCard.css';

const TaskCard = () => {
      return (
            <div className='task-card'>
                  <div className='task-content'>
                        <div className='task-title'>
                              test 1
                        </div>
                        <div className='task-desc'>complete this task tommorow</div>
                  </div>
                  <button className='done-btn' >
                        Done
                  </button>
            </div>
      );
}

export default TaskCard;
