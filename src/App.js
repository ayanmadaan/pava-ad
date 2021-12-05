import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Investors from "./components/Investors/Investors";
import Products from "./components/Prodcuts/Products";
import Footer from "./components/Footer/Footer";
import Scroller from "./components/Scroller/Scroller";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Home />
      <Investors />
      <Products />
      <Footer />
      <Scroller />
    </div>
  );
}

export default App;
