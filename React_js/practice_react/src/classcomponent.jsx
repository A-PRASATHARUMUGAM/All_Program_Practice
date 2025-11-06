import React from 'react';

class Apple extends React.Component{


   render(){

       const {Appleinfo}=this.props;
       const {type,color}=Appleinfo;


      return (

        <div>
       <h1 style={{textAlign:'center',color:'red'}}>React Class Component </h1>

         <p>Apple Type: <span style={{color:'red'}}>{type}</span></p>
         <p>Apple Color: <span style={{color:'red'}}>{color}</span></p>
    
        </div>


      )
   }

}


export default Apple;