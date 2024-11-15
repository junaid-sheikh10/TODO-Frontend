import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./AddTodoForm"
import Todo from "./Todo"
import UpdateTodoForm from "./UpdateTodoForm"
import {Network_URL}  from '../utils/Config';
import axios from 'axios';

const TodoWrapper = () => {

const [TodoList,setTodoList ] = useState([])


//Initial network call
 useEffect(()=>{
     getData()
 },[])

 async function getData(){
     const data=await fetch(Network_URL);
     const json=await data.json();
     console.log(json.data)
     setTodoList(json.data)
 }


//Add task to the list
const addTodo=async(todo)=>{
    let newTask={id:uuidv4(),task:todo,isEditing:false,isComplete:false}

    setTodoList([
        ...TodoList,
       newTask
    ])

    // await fetch('Network_URL', {
    //     Method: 'POST',
    //     Body: newTask,
    //   })

    axios.post(Network_URL,newTask).then(response=>console.log(response.status,response.data))

}

//delete tasks from the list
const deleteTodo=async(id)=>{
    console.log("delete handler")
   setTodoList(TodoList.filter(todoItem=>todoItem.id!==id));
   
//     await fetch('Network_URL', {
//     Method: 'DELETE',
//     Body: id,
//   })

console.log("id from deleteTodo"+id)
axios.delete(Network_URL,{data:{id}}).then(response=>console.log(response.status,response.data))

}

//Mark task as complete
const completeTodo=(id)=>{
    console.log("task completed")
    let completedTodo= TodoList.map(todo=>todo.id===id?{...todo,isComplete:!todo.isComplete}:todo)
    console.log(completedTodo)

    setTodoList(
        completedTodo
    )   
    updateTodoDB(id,completedTodo)
}

//Update Todolist in the Backed
const updateTodoDB=async(id,completedTodo)=>{
    console.log("changes made in DB")
    console.log(completedTodo)

    let newTodo=completedTodo.filter(todo=>todo.id===id)
    axios.put(Network_URL,newTodo[0] ).then(response=>console.log(response.status,response.data))
}

//change isEditing parameter
const editTodo=async(id)=>{
    console.log(`edit handler for`)
   
    setTodoList(
        TodoList.map((todo)=>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    )  

   
}

//update task in frontend
const editTask=(id,task)=>{
   
   let updatedTodo =  TodoList.map((todo)=>  todo.id === id ? {...todo,task,isEditing:!todo.isEditing}:todo)  

    setTodoList(updatedTodo )

    updateTodoDB(id,updatedTodo)
}

  return (
    <div className='grid '>
        <AddTodoForm   addTodo={addTodo} ></AddTodoForm>
        {/* Display Todo */}
        <hr className='border-2 border-solid border-red-500' />           
        {TodoList.map(todo=>
                    todo.isEditing ? (<UpdateTodoForm key={todo.id} id={todo.id} editTask={editTask} >
                    </UpdateTodoForm>): (todo.isComplete===false && <Todo 
                    key={todo.id} 
                    task={todo} 
                    editTodo={editTodo} 
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo} 
                    id={todo.id} >
                    </Todo>)         
        )}
            <div>
                {TodoList.map(todo=>
                    todo.isComplete &&
                    (<Todo 
                    key={todo.id} 
                    task={todo} 
                    editTodo={editTodo} 
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo} 
                    id={todo.id} >
                </Todo>) 
                )}
            </div>
        
    </div>
  )
}

export default TodoWrapper

// isEditing ? <UpdateTodo></UpdateTodo> :