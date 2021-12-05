import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Investors from "./components/Investors/Investors";
import Products from "./components/Prodcuts/Products";
import Footer from "./components/Footer/Footer";
import Scroller from "./components/Scroller/Scroller";
import Specs from "./components/Specs/Specs";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Home />
      <Investors />
      <Products />
      <Specs />
      <Footer />
      <Scroller />
    </div>
  );
}

export default App;
