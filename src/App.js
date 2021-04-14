import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import "./App.css";


function App() {
  const activeLinkStyle = {
    fontWeght: "bold",
  }

  return (
    <div className="App">
      <ul>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/">Home</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink"  to="/contacts">Contacts</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink"  to="/about">About</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink"  to="/posts">Posts</NavLink></li>

      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
        <Redirect to="/" />
      </Switch>

      {/* <About /> */}
    </div>
  );
}

export default App;
