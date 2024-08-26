import React, { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

// Helper function to get tasks from localStorage
const getStoredTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

function Home() {
    const [tasks, setTasks] = useState(getStoredTasks());
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        // Store tasks in localStorage whenever they change
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

    const addTask = (text) =>{
        setTasks([...tasks, {id : Date.now(), text}])
    }

    const updateTask = (text) =>{
        setTasks(tasks.map((task)=>task.id === editingTask.id ? {...tasks, text} : task));
        setEditingTask(null);
    }

    const deleteTask = (id) =>{
        setTasks(tasks.filter(task=> task.id !== id));
    }
  return (
    <div className='taskManage'>
        <TaskForm
        currentTask={editingTask}
        onSubmit={editingTask ? updateTask : addTask}
        />
        <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        />
    </div>
  )
}

export default Home