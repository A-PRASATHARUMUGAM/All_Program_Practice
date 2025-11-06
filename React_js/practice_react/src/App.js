import "./App.css";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import RectCss from "./React_Applying_CSS";
import ReactEvents from "./React_Click_Events";
import ReactUseState from "./React_useState_Hook";
import ReactListKeys from "./React_List_and_Keys";
import ReactProps from "./React_Props_Prop_Drilling";
import ReactControlledInput from "./React_Controlled_Inputs";
import Practicefunct from "./Practice_React";

function App() {


  return ( 

   <div>   
      <Practicefunct/>
      <Header   /> 
      <Section />
      <Footer /> 
      <RectCss/>
      <ReactEvents />
      <ReactUseState /> 
      <ReactListKeys />
      <ReactProps title="Prasath" />
      <ReactControlledInput /> 

 
           
   </div>
  );
}

export default App;
