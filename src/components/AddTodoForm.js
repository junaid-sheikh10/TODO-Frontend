import React, { useState } from 'react'

const AddTodoForm = ({addTodo}) => {

const [value, setValue] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
        addTodo(value)
        setValue("")
    }    
}

    return (
    <div >
        <form className='py-2' onSubmit={handleSubmit}>
            <input className='border-solid border-black border-2 px-2 rounded-lg  '  value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder='Enter task here'/>
            <button className='border-solid border-black border-2 px-2 rounded-lg font-bold mx-1 hover:bg-black hover:text-white' type='submit' >Add Task</button>
        </form>


    </div>
  )
}

export default AddTodoForm