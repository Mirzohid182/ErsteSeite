import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";
import Messages from "./Messages/dialogs";
import Musik from "./musik/musik";
import News from "./News/news";
import Settings from "./settings/settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Switch>
          <Route path="/Content"   component={Content} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Musik" component={Musik} />
          <Route path="/News" component={News} />
          <Route path="/Settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
