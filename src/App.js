import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doc Apt',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Groceries',
        day: 'Feb 8th',
        reminder: false,
    }
])

// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task };
  setTasks([...tasks, newTask]);
}

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  /*
  let temp = [];
  tasks.forEach(task => { if (task.id !== id ) temp.push(task) });
  setTasks(temp);
  console.log(temp);
  */
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowTaskForm(!showTaskForm)}
      showForm={showTaskForm}
      />
      {showTaskForm && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
      />) :
      ('No Tasks To Display')}
    </div>
  );
}

export default App;
