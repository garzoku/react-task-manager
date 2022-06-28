import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  // useState is one-way data. It only comes down.  
  // cannot push to this to make changes. That's what
  // setTasks is for. 
  
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}



export default Tasks