import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import RectCss from "./React_Applying_CSS";

function App() {


  return (

   <div>
      <h1 style={{textAlign:'center'}}>React Functional Components </h1>
      <Header />
      <Section />
      <Footer />
      <RectCss/>
   </div>
  );
}

export default App;
