import React, { useEffect, useState } from 'react'

function TaskForm({currentTask, onSubmit}) {
    const [task, setTask] = useState('')

    useEffect(()=>{
        if(currentTask){
            setTask(currentTask)
        }
    },[currentTask])

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(task);
        setTask('');
    }

  return (
    <div className='formTask'>
       <form onSubmit={handleSubmit} className='form'>
            <input
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder='Enter Task'
            required
            />
            <button type='submit'>Save</button>
       </form>
    </div>
  )
}

export default TaskForm