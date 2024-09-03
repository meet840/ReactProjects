import "./App.css";
import { useState } from "react";

function App() {
   let [counter, setCounter] = useState(5);

   // let counter = 5;
   const addValue = () => {
      if (counter < 20) {
         setCounter((preCounter) => preCounter + 1);
         setCounter((preCounter) => preCounter + 1);
         setCounter((preCounter) => preCounter + 1);
         setCounter((preCounter) => preCounter + 1);
         setCounter((preCounter) => preCounter + 1);
      } else {
         return false;
      }
   };
   const removeValue = () => {
      if (counter > 0) {
         setCounter(counter - 1);
      } else {
         return false;
      }
   };

   return (
      <>
         <h1>Coffee with React</h1>
         <h2>Counter Value: {counter}</h2>
         <button onClick={addValue}>Add value{counter}</button>
         <button onClick={removeValue}>Remove value{counter}</button>
         <p>Footer: {counter}</p>
      </>
   );
}

export default App;
