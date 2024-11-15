import React from 'react'
import TodoWrapper from './components/TodoWrapper'



const App = () => {
  return (
    <div className='rounded-xl border-solid min-h-1/2
     border-2 border-black w-1/2 m-auto p-3 mt-2'>
        <div>
        <h1 className='font-bold'>TODO APP</h1>
        <p className='text-red-600'>write your tasks for today !</p>
        </div>
       
        <TodoWrapper></TodoWrapper>
        
    </div>
  )
}






export default App