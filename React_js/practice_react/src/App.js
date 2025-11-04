import logo from "./logo.svg";
import "./App.css";

function App() {

  function handlefunction(){
      let arr=['Earn','Grow','Give'];

   
      let rand = Math.floor(Math.random()*3);

      return arr[rand];

  } 

  return (

   <div>
      <p> Hello World </p> 
      <p> Let's {handlefunction()} Money </p>
   </div>
  );
}

export default App;
