import React from 'react';
import { useState } from 'react';
const ReactUseState=()=>{


    // 1. UseState is data it's change it state based for user interaction 
    // 2. Can't use the UseState inside the class component it working only Functional Component 
    // 3. useState Can't called conditionally like if, if else,for 
    


  // Implement the useState
   const [count,setCount] =useState(99);

   function incrementbtn(){

       let data=count + 1;
       setCount(data);
   }

     function decrementbtn(){

                let data=count - 1;
                setCount(data);
        }



    return (
 
        
        <div className="reactusestate">

            <h1 style={{textAlign:'center',color:'red'}}>React_useState Hook </h1>

 
        {/* Using useState  */}
        <button onClick={()=>incrementbtn()}>+</button>

        <p id='data' >{count}</p>

        <button onClick={()=>decrementbtn()}>-</button>

        </div>


    );
}

export default ReactUseState;