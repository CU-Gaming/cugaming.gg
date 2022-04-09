import React from 'react';
import './App.css';
import {Home} from "./app/pages/Home";
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {Root} from "./app/components/layout/Root";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Root>
                    <AppRoutes/>
                </Root>
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
