import { useState, useCallback, useEffect, useRef } from "react";

function App() {
   const [length, setlength] = useState(8);
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);
   const [password, setPassword] = useState("");
   const [buttonClicked, setButtonClicked] = useState(false);

   //use ref hook
   const passwordRef = useRef(null);

   const passwordGenrator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      for (let i = 1; i <= length; i++) {
         let char = Math.floor(Math.random() * str.length + 1);
         pass += str.charAt(char);
      }
      setPassword(pass);
      setButtonClicked(false);
   }, [length, numberAllowed, charAllowed, setPassword]);

   const copyPasswordToClip = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 49);
      window.navigator.clipboard.writeText(password);
   }, [password]);

   useEffect(() => {
      passwordGenrator();
   }, [length, numberAllowed, charAllowed, passwordGenrator]);

   const handleButtonClick = () => {
      copyPasswordToClip();
      setButtonClicked(true); // Set button state to clicked
   };

   return (
      <div className="w-full max-w-md mx-auto shadow-md px-8 my-8 rounded-lg text-orange-500 bg-gray-700">
         <h1 className="text-white text-center my-4">Password generator</h1>
         <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
               type="text"
               value={password}
               className="outline-none w-full py-1 px-3"
               placeholder="Password"
               readOnly
               ref={passwordRef}
            />
            <button
               onClick={handleButtonClick}
               className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            >
               {buttonClicked ? "Copied" : "Copy"}
            </button>
         </div>
         <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
               <input
                  type="range"
                  min={6}
                  max={50}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                     setlength(e.target.value);
                  }}
               />
               <label>Lenght:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
               <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                     setNumberAllowed((prev) => !prev);
                  }}
               />
               <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
               <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                     setCharAllowed((prev) => !prev);
                  }}
               />
               <label htmlFor="characterInput">Characters</label>
            </div>
         </div>
      </div>
   );
}

export default App;
