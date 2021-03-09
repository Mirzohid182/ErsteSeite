import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}
export default App;
