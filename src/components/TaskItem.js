import React from 'react'

function TaskItem({task, onEdit, onDelete}) {
  return (
    <div className='taskItem'>
        <span>{task.text}</span>
        <button onClick={()=>onEdit(task)}>Edit</button>
        <button onClick={()=>onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem