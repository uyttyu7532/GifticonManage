import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/barcode/:id" component={Detail}  />
                <Redirect path="*" to="/" />
            </Switch>
        </HashRouter>
    );
}

export default App;