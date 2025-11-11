import './App.css';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import ReactCss from './component/React_Applying_CSS';
import ReactEvents from './component/React_Click_Events';
import ReactUseState from './component/React_Click_Events';
import ReactListKeys from './component/React_List_and_Keys';
import ReactProps from './component/React_Props_Prop_Drilling';
import ReactControlledInput from './component/React_Controlled_Inputs';
import Practicefunct from './component/Practice_React';
import Apple from "./component/classcomponent";

function App() {

 const datainfo = {fname:"prasath",gender:"male"};
 const Appleinfo={ type:'Fujj', color:'red '};

  return ( 

   <div>   
      <Practicefunct/> 
      <Header   /> 
      <Section />
      <Footer /> 
      <ReactCss/>
      <ReactEvents />
      <ReactUseState /> 
      <ReactListKeys />
      <ReactProps  data={datainfo} />
      <Apple Appleinfo={Appleinfo} /> 
      <ReactControlledInput /> 


   </div>
  );
}

export default App;
