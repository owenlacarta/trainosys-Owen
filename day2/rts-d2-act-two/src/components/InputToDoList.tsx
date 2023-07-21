// import React, { useState } from 'react'
// import '../assets/Todo.css'
// // import { Todotasks } from '../../Data/TodoList';
 
// type TodoProps = {
//     id:number,
//     Title:string,
//     Completed:boolean,

// }

// export const ToDoList = () => {

//     const [Todos, setTodos] = useState<TodoProps[]>([]);

//     const [todoValue,settodoValue] = useState("");
      
//     const AddTodo = (Title:string) => { 
//         const newTodo = {
//           id:0,
//           Title: Title, 
//           Completed:false
//         };  
//         setTodos((prevRows) => [newTodo,...prevRows ]);
       
//       };

//       // const [bugs, setBugs] = useState<TodoProps[]>([]);
//       // {
        
//       //   setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//       // };
      





//     return (
//         <>
//         <div className='container-todo'>
//             {
//                 Todos.length===0 ? <>No Task for today</> : <> {Todos.map ((todos,index) =>( 
//                     <div className='content-todo'>  
//                       <div className="todos" >
//                       {todos.Title}
//                       </div> 
//                     </div>
//                     ))}</> 

//             }
            
//             <div className='controls-todo'>
//                 <input onChange={(e)=>{ settodoValue(e.target.value) }} className='input-todo'></input>
//                 <button className='btn-todo' onClick={()=>{AddTodo(todoValue) }}>Add Task</button>
               
//             </div> 

           

//         </div>
        
//         </> 
//   )
// }

import React, { useState } from 'react';
import '../assets/Todo.css';

type TodoProps = {
  id: number,
  Title: string,
  Completed: boolean,
}

export const ToDoList = () => {
  const [Todos, setTodos] = useState<TodoProps[]>([]);
  const [todoValue, settodoValue] = useState('');

  const AddTodo = (Title: string) => {
    const newTodo = {
      id: Todos.length + 1, // Assign a unique id to the new todo item
      Title: Title,
      Completed: false,
    };
    setTodos((prevRows) => [...prevRows, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevRows) => prevRows.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, newTitle: string) => {
    setTodos((prevRows) =>
      prevRows.map((todo) => (todo.id === id ? { ...todo, Title: newTitle } : todo))
    );
  };

  return (
    <>
      <div className='container-todo'>
        {Todos.length === 0 ? (
          <>No Task for today</>
        ) : (
          <>
            {Todos.map((todo, index) => (
              <div key={todo.id} className='content-todo'>
                <div className='todos'>
                  {todo.Title}
                </div>
                <button onClick={() => handleEditTodo(todo.id, prompt('Edit the task:', todo.Title) || todo.Title)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            ))}
          </>
        )}
        <div className='controls-todo'>
          <input onChange={(e) => { settodoValue(e.target.value) }} className='input-todo' />
          <button className='btn-success' onClick={() => { AddTodo(todoValue) }}>Add Task</button>
        </div>
      </div>
    </>
  );
};
