import './App.css';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import ReactCss from './component/React_Applying_CSS';
import ReactEvents from './component/React_Click_Events';
import ReactUseState from './component/React_useState_Hook';
import ReactListKeys from './component/React_List_and_Keys';
import ReactProps from './component/React_Props_Prop_Drilling';
import ReactControlledInput from './component/React_Controlled_Inputs';
import Practicefunct from './component/Practice_React';
import Apple from "./component/Classcomponent";

// J Implement the Component asfjasld;fjal;sdf
import CreateState from './Jcomponent/Creating_State'; 
import UseEffect_J from './Jcomponent/useEffect_J'; 

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

      {/* JComponent Implement */}

      <CreateState />
      <UseEffect_J />
      
   </div>
  );
}

export default App;
