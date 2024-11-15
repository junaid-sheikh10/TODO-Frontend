import React, { useState } from 'react'

const UpdateTodoForm = ({id,editTask}) => {

const [value, setValue] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault(); 
    editTask(id,value)   
    console.log("update handle submit form")
}
    return (
    <div className="pt-2">
        <form onSubmit={handleSubmit}>
            <input className='border-solid border-black border-2 px-2 rounded-lg '   value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder='Update task here'/>
            <button className='border-solid border-black border-2 px-2 font-bold rounded-lg mx-1  hover:bg-black hover:text-white' type='submit' >Update Task</button>
        </form>


    </div>
  )
}

export default UpdateTodoForm