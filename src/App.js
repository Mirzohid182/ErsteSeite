import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";
import Messages from "./Messages/dialogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className='content'>
        <Content />
        <Messages name="Dialogs" href='w'/>
      </div>
      {/* mir */}
    </div>
  );
}
export default App;
