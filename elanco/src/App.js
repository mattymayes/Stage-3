import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Index";
import Offers from "./pages/Offers";
import SingleOffer from "./pages/SingleOffer";
import Alert from "./components/Alert";
import Scan from "./pages/Scan";
import Clinic from "./pages/Clinic";
import Pets from "./pages/Pets";

function App() {
  return (
    <Router>
      <Alert />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path="/offer">
          <SingleOffer />
        </Route>
        <Route path="/scan">
          <Scan />
        </Route>
        <Route path="/clinic">
          <Clinic />
        </Route>
        <Route path="/pets">
          <Pets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
