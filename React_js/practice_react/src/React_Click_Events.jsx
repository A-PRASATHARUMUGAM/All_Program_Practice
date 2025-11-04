import React from 'react';


const ReactEvents=() => {

const handlefunction=()=>{

 let arr=['Earn','Grow','Give'];
 let rand=Math.floor(Math.random()*3);
 
 return arr[rand];

}

const handleclick=()=>{
    
    console.log("It is perfectly working");
     
}
 

function  handleclick2(data){

console.log(data);

    
}

function showcurrentevent(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);
}
  
return (
    <div>
        <h1 style={{textAlign:'center'}}>React Click Events </h1>

        <h2>Let's {handlefunction()} Money </h2>
         
        <button onClick={handleclick}>Click</button> 

        {/* Parameter Passing  */}
        <button onClick={()=>handleclick2('Prasath')}>Passing Arugument</button> 
      

         {/* Show the Current Event  */}
         <button onClick={(event)=>showcurrentevent(event)} > Show current Event </button>
    </div>
);

}


export default ReactEvents;