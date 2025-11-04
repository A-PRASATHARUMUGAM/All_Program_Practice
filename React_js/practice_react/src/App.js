import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import RectCss from "./React_Applying_CSS";
import ReactEvents from "./React_Click_Events";
import ReactUseState from "./React_useState_Hook";

function App() {


  return (

   <div>

      <Header />
      <Section />
      <Footer />
      <RectCss/>
      <ReactEvents />
      <ReactUseState /> 
   </div>
  );
}

export default App;
