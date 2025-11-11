import React from 'react';
import { useState } from 'react';

            //   --- All Titles ---
// 1.Creating State
// 2.Multiple State in Hooks
// 3.State with Object
// 4.Updating Object in State

// 5.Updating Arrays in State

// 6.Creating State in Class Components
// 7.Updating Object in Class Components


const  Createstate =()=>{

    //1.Single useState
    const [data ,setdata]= useState("World ");

   const checkfunction =()=>{

       setdata('prasath');
       setdata('Bread');

   }

    //2.Multiple useState
    const [product1, setproduct1]=useState('Jam');
    const [product2, setproduct2]=useState('Samosa');
    const [product3, setproduct3]=useState('Pizza');
    const [product4, setproduct4]=useState('Burger');

    const multifunct =()=>{
    
        setproduct1('Milk');
        setproduct2('Bread');
        setproduct3('Cake');
        setproduct4('Chocolate');
        
    }
    

    //3.State With Object
    const [productdata, setproduct ]=useState(
        {
            product1:'Jam',
            product2:'Samosa',
            product3:'Pizza',
            product4:'Burger',
        }
    );

    

    
    const stateobjfunct=()=>{

        
        // setproduct({
        //     product1:'Milk',
        //     product2:'Bread',
        //     product3:'Cake',
        //     product4:'Chocolate',
        // });
        
    // 4. Updating Object in State  

     setproduct((previousvalue)=>{

        return {
                ...previousvalue,product1:'prasath'
        }

     })
        


        
    }
 

 
    return (
        <div>
             <h1 style={{color:'red',textAlign:'center'}}> J Implementation  Start here </h1>

            {/* 1.Single useState */}
 

            <div className="sub-title"> 1. Single useState</div>
            <div>   

                  <p>Hello {data}</p>
            </div>

                  

                  {/* 2.Multiple useState */}
                            
                <div>

                    <h4 className='sub-title'>2. Multiple State in Hooks</h4>

                    <li>Product :{product1}</li>
                    <li>Product :{product2} </li>
                    <li>Product :{product3}</li>
                    <li>Product :{product4} </li>


                    <button onClick={()=>multifunct()}> click</button>

                  </div>



                  {/* 3.State with Object  */}
                  <div>
                      <h4 className='sub-title'>3. State with Object And 4. Updating Object in State</h4>

                        {/* 4. Updating Object in State  */}
                    <li >Product : <span style={{color:'red'}}>{productdata.product1}</span></li>
                    <li>Product :{productdata.product2}</li>
                    <li>Product :{productdata.product3}</li>
                    <li>Product :{productdata.product4}</li>

                     <button onClick={()=>stateobjfunct()}> click</button>
 
                

                  </div>


                    {/*  5. Updating Arrays in State */}
                  
            
                    <div>
                      <h4 className='sub-title'>5. Updating Arrays in State </h4>




                    </div>



        
        </div>


    ) 
}


export default Createstate;