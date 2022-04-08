import React from 'react';
import './App.css';
import {Home} from "./app/pages/Home";
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {store} from "./app/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppRoutes/>
            </HashRouter>
        </Provider>
    );
}

function AppRoutes(): JSX.Element {
    return (
        <Switch>
            <Route path={'/'}>
                <Home/>
            </Route>
        </Switch>
    )
}

export default App;
