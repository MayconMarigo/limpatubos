import "./App.css";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Services from "./containers/Services/Services";
import Locals from "./containers/Locals/Locals";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import Maps from "./containers/Maps/Maps";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Locals />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
