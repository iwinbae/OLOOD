import familypic from "./images/olood_gang1.jpg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gang from "./Gang";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/home">OLOOD.</Link>
        </header>

        <nav className="nav-bar">
          <Link to="/connect"> CONNECT </Link>/<Link to="/gang"> GANG </Link>/
          <Link to="/merch"> MERCH </Link>/<Link to="/work"> WORK </Link>
        </nav>

        <main>
          <Switch>
            {/*{" "}
            <Route path="/connect">
              <Connect />
            </Route>{" "}
  */}
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/gang">
              <Gang />
            </Route>
            {/*{" "}
            <Route path="/merch">
              <Merch />
            </Route>
            <Route path="/work">
              <Work />
            </Route>{" "}
*/}
          </Switch>
        </main>
      </Router>

      <footer>
        <p> © Copyright All Rights Reserved 2020 OLOOD Corp. ™</p>
      </footer>
    </div>
  );
}

export default App;

function Home() {
  return <img src={familypic}></img>;
}
