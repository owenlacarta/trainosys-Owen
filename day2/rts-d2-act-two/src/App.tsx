// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// let name = "Jem";
// name = "Josh"

// let firstName: string;
// // let age: number;
// let isTrue: boolean;
// let hobbies: string[]; // array of strings
// let personalDetails: [string, number]; // tuple

// // Union
// let age: number | string;

// age = "5";

// // let person: Object;

// // function
// // let printName: Function;
// let printName: (name: string) => void; // type of return is void
// let printNameAgain: (name: string) => number; // type of return is void

// // Type ANY

// // let hello: any;

// // hello = 5;

// // Type unknown
// let hello: unknown;

// firstName = "Arnold";
// age = 5;
// isTrue = true;
// hobbies = ["Eating", "Drinking"]
// personalDetails = ["Jem", 5]

// // interface
// type PersonTwo = {
//   name: string;
//   age?: number; // optional
//   adresss: string;
// }

// interface Example extends PersonTwo { // inheritance (extends)
//   name: string;
//   age?: number; // optional
// }

// let person: Person = {
//   name: "Jem",
// }

// import SampleComponent from './components/SampleComponent'
// import DataBindingComponent from './components/DataBindingComponent'
import { ToDoList } from './components/InputToDoList'
// import UseEffectComponent from './components/UseEffectComponent'
import {useEffect, useState} from 'react'

// function App() {
const App: React.FC = () => {
const [counter, setCounter] = useState<number>(0);

  console.log('Render start')

  // const handleOnClick = () => {
  //   setCounter(counter - 10)
  // }

useEffect(() => {
console.log('use effect with [counter]')
}, [])

useEffect(() => {
 return () => console.log('Clean-up effect')
  }, [])

return (
    <>
      {/* <h1>Hello World!</h1>
      <h1>Hello Trainosys!</h1> */}
      {/* <SampleComponent />
      <DataBindingComponent /> */}
      <ToDoList/>
      {/* <div>
        <UseEffectComponent/>
      </div>
<div> {counter}</div>
<button onClick={handleOnClick}> decrement by 10</button> */}
{/* <button onClick={{} => }></> */}
    </>
  )
}

export default App
