
import './TaskCard.css';

const TaskCard = ({ task, onDone }) => {
      return (
            <div className='task-card'>
                  <div className='task-content'>
                        <div className='task-title'>
                              {task.title}
                        </div>
                        <div className='task-desc'>{task.description}</div>
                  </div>
                  <button className='done-btn' onClick={() => onDone(task.id)} >
                        Done
                  </button>
            </div>
      );
}

export default TaskCard;
