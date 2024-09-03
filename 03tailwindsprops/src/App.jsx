import "./App.css";
import Card from "./components/Card";
function App() {
   // let myObj = {
   //    username: "Meet",
   //    age: 21,
   // };

   // let myArr = [1, 2, 3, 4, 5];
   return (
      <>
         <h1 className="bg-green-300 text-black p-4 rounded-2xl mb-4">
            Tail wind CSS
         </h1>
         <Card username="MrBeast" btnText="click me" />
         <Card username="Vsause"  />
      </>
   );
}

export default App;
