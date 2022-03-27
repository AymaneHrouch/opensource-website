import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LandingPage19 from "./views/LandingPage19";
import LandingPage from "./views/LandingPage";
import NotFound from "./views/404";
import Speakers from "./views/Speakers";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/OpenSource9">
                    <LandingPage19 />
                </Route>
                <Route exact path="/speakers">
                    <Speakers />
                </Route>
                <Route exact path="/404">
                    <NotFound />
                </Route>
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
