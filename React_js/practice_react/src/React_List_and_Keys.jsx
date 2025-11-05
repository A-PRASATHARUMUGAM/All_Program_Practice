import React from 'react';
import { useState } from 'react';

const ReactListKeys=() =>{


    const arr=[1,2,3,4,5];


const [items, setItem]=useState( [

        { 
            id:1, 
            checked:false,
            item:"Movie"
        },
        {
            id:2,
            checked:true,
            item:"Book",
        },
        {
            id:3,
            checked:false, 
            item:"Work"
        }
]);

function handlecheck(id){

    let listitems=items.map((item)=> item.id==id? {...item,checked:!item.checked}:item);

    setItem(listitems);
    
}

function handledelete(id){

   let listitems= items.filter((item)=>item.id!==id);

   setItem(listitems);  

}


    return (

        <div>
            <h1 style={{textAlign:'center',color:'red'}}>React List and Keys </h1>


            <ul>
                {items.map((item)=>(
                
                    <div>
  
                    <li key={item.id} >
                         <input
                          type="checkbox"
                           checked={item.checked}
                           onChange={()=>handlecheck(item.id)}
                           
                           />  
                         <label htmlFor="" >{item.item}</label>  
                         <button onClick={()=>handledelete(item.id)}>Delete</button>
                    </li>
     
                    </div>   
                
                ))}
               
            </ul>




        </div>
    ); 



}


export default ReactListKeys;

