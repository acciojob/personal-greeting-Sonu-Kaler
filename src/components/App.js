
import React, { useState } from "react";
import './../styles/App.css';
// import { set } from "cypress/types/lodash";

const App = () => {
  const [name,setName] = useState("");
  function fun(e){
    setName(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" onChange={fun}/>
        <p>{name}</p>
    </div>
  )
}

export default App
