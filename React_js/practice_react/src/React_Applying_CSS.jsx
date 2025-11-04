import React from 'react';

// 1. Implement the external style to React
import "./App.css";





const ReactCss=()=>{

// 2. Internal style using variable to style 
let internalstyle= {backgroundColor:'yellow'}



    return (
        <div className='react_style'>
                    <h1 style={{textAlign:'center'}}>React Applying CSS </h1>

                <h1 className='react_external_style'>React External style </h1>

                {/* 3. This is inline style   */}
                <h1 style={{color:'blue'}}> React Inline style  </h1>

                   <h2>Or</h2>
                   
                <h1 style={internalstyle} > React Inline style using variable </h1>

                <h1 className='react_internal_style' >React internal style </h1>

        </div>
    );
}


export default ReactCss