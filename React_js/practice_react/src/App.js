import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import RectCss from "./React_Applying_CSS";
import ReactEvents from "./React_Click_Events";

function App() {


  return (

   <div>
      <h1 style={{textAlign:'center'}}>React Functional Components </h1>
      <Header />
      <Section />
      <Footer />
      <RectCss/>
      <ReactEvents />
   </div>
  );
}

export default App;
