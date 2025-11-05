import React from 'react';
import { useState } from 'react';

const ReactListKeys=() =>{


    const arr=[1,2,3,4,5];


const [items, setItem]=useState( [

        {
            id:1,
            check:true,
            item:"Movie"
        },
        {
            id:2,
            check:true,
            item:"Book",
        },
        {
            id:3,
            check:false, 
            item:"Work"
        }
]);


   


    return (

        <div>
            <h1 style={{textAlign:'center',color:'red'}}>React List and Keys </h1>


            <ul>
                {items.map((item)=>(
                    
                    <div>
  
                    <li>
                         {item.id}.
                         <input type="checkbox" checked={item.check}/> 
                         <label htmlFor="" >{item.item}</label> 
                         <button>Delete</button>
                    </li>

                    </div>
                
                ))}
               
            </ul>




        </div>
    );



}


export default ReactListKeys;

