import React from 'react';


// Using Parameter Props & Prop Drilling
const ReactProps=(props)=>{

    const {data}=props;
    const {fname,gender}=data;
    

    return (
        <div>
            <h1 style={{textAlign:'center',color:'red'}}>React Props & Prop Drilling </h1>
                
            <h2>Using Props </h2>

            <p>Name: {fname}</p>
            <p>Gender: {gender}</p>
 
            
        </div>
    );

}    

export default ReactProps;   