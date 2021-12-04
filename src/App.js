import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Investors from "./components/Investors/Investors";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Home />
      <Investors />
    </div>
  );
}

export default App;
