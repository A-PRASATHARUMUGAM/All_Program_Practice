import React from 'react';

const ReactProps=(props)=>{


    return (
        <div>
            <h1 style={{textAlign:'center',color:'red'}}>React Props & Prop Drilling </h1>
            
            <h2>Using Props : <span style={{color:'blue'}}>{props.title}</span> </h2> 

        </div>
    );

}    

export default ReactProps;   