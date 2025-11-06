import React from 'react';

const Practicefunct=()=>{

  const details= [

        {id:'1',fname:'prasath',from:"villupuram"},

        {id:'2',fname:'sabari',from:"chennai"},

        {id:'3',fname:'vignesh ',from:"Madhuri"},

  ]

  const arr=[1,2,3,4,5];
  
   return ( 

    <div>
    <h1 style={{textAlign:'center',color:'red'}}> Practice the React js  </h1>

        <div style={{border:'1px solid black',padding:"20px"}}>

            {details.map((data)=>(

                <div style={{border:"1px solid blue"}}  key={data.id}> 

                <li>id:{data.id}</li> 

                <li>name:{data.fname}</li>
 
                <li>name:{data.from}</li>

                </div>
 
            ))}
 

            <div style={{border:"1px solid red "}}>
                
                <div>
                    
                    {arr.map((item,index)=>(   

                                <div key={index}>

                                    <li >{item}</li> 

                                </div>
                         
                    ))}

                    
                </div>



            </div>
   


        </div>


        


    </div>



   );
    
}


export default Practicefunct;