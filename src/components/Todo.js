import React from 'react'

const Todo = ({editTodo,deleteTodo,task,id,completeTodo}) => {
  return (

    <div className={`${task.isComplete ? "flex gap-2  justify-between   bg-slate-700 px-2 mt-2 h-14 items-center rounded-md ": "flex gap-2  justify-between   bg-slate-200 px-2 mt-2 h-14 items-center rounded-md "}`}>
    <h2 className={`${task.isComplete? "font-medium text-decoration-line: line-through text-lg": "text-lg font-medium"}`}  
    onClick={()=>{completeTodo(task.id)}}>
      {task.task}</h2>


    <div className='flex gap-1 items-center '>

    {task.isComplete ===false && <button className='border-solid border-yellow-400 border-2 h-8 px-2 font-bold text-yellow-500 rounded-lg  hover:bg-yellow-500 hover:text-white ' onClick={()=>editTodo(task.id)} >edit</button> }
    
    <button className='border-solid border-green-600 border-2 h-8 px-2 text-green-500 rounded-lg font-bold  hover:bg-green-500 hover:text-white' onClick={()=>deleteTodo(task.id)} >delete</button>
    </div>
   
    </div>
  )
}

export default Todo