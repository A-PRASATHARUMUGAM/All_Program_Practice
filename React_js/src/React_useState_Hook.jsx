import React from 'react';
import { useState } from 'react';
const ReactUseState=()=>{


    // 1. UseState is data it's change it state based for user interaction 
    // 2. Can't use the UseState inside the class component it working only Functional Component 
    // 3. useState Can't called conditionally like if, if else,for 
    


  // Implement the useState
   const [count,setCount] =useState(99);

   function incrementbtn(){

       setCount(count + 1);
   }

     function decrementbtn(){

                setCount(count - 1);
        }


        
        let [sname,setName]=useState("Hook") 

        function statenamechange(data){
            setName(data);
        }

        
        return (
 
         
        <div className="reactusestate">

            <h1 style={{textAlign:'center',color:'red'}}>React_useState {sname} </h1>

            <button onClick={()=>statenamechange('Hook2')} >Change the Title</button> <br />
 
        {/* Using useState  */}
        <button onClick={()=>incrementbtn()}>+</button>

        <p id='data' >{count}</p>

        <button onClick={()=>decrementbtn()}>-</button>

        </div>


    );
}

export default ReactUseState;