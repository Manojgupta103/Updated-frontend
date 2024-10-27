import { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { TbSquareArrowRight } from "react-icons/tb";


export default function TaskSection() {
  // State for tasks and the new task form
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sign up for Covid - 19 training course for medicians', date: '24 Oct 2022', completed: true },
    { id: 2, title: 'Fill up the previous ERP Report', date: '24 Oct 2022', completed: true },
    { id: 3, title: 'Send prescription files to Night duty nurse', date: '24 Oct 2022', completed: true },
    { id: 4, title: 'Set up afternoon meeting', date: '24 Oct 2022', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1, // Generate new ID based on length of the tasks array
        title: newTask,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTaskObj]); // Update state by appending the new task
      setNewTask(''); // Clear the input field after submission
      setShowForm(false); // Hide form after task is added
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg h-full overflow-y-scroll scrollbar-hide">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blue-600 font-medium hover:text-blue-800"
        >
          New Task +
        </button>
      </div>

      {/* Conditional rendering of the task input form */}
      {showForm && (
        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task description"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={addTask} // Call the addTask function on click
            className="mt-2 bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      )}

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className= "flex justify-between items-center p-4 mb-2 rounded-lg bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  setTasks((prevTasks) =>
                    prevTasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  );
                }}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <div className="ml-3">
                <h3 className="text-base font-medium">
                  {task.completed ? (
                    <span className="text-blue-600">Task Completed successfully</span>
                  ) : (
                    <span className="text-gray-600">Task not completed</span>
                  )}
                </h3>
                <p className="text-sm text-gray-500">{task.title}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">{task.date}</p>
              <button className="ml-3 text-gray-400 hover:text-gray-600">
                &#x22EE;
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <a
          href="doctor/tasks"
          className="text-[#22246d] text-sm font-medium flex align-bottom justify-end gap-2"
        >
            <p>View all</p>
            <TbSquareArrowRight className='mt-1'/>
        </a>
      </div>
    </div>
  );
}
