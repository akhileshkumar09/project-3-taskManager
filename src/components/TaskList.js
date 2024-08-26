import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onEdit, onDelete}) {
  return (
    <div className='taskList'>
       {
        tasks.map((task)=>(
            <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            />
        ))
       }
    </div>
  )
}

export default TaskList