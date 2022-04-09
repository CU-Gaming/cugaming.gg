import React from 'react';
import './App.css';
import {Home} from "./app/pages/Home";
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {Root} from "./app/components/layout/Root";
import { About } from './app/pages/About';
import { Inclusion } from './app/pages/Inclusion';
import { Intramurals } from './app/pages/Intramurals';
import { Leadership } from './app/pages/Leadership';
import { Recruitment } from './app/pages/Recruitment';
import { Teams } from './app/pages/Teams';

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
            <Route exact path={'/'}>
                <Home/>
            </Route>
            <Route path={'/about'}>
                <About/>
            </Route>
            <Route path={'/inclusion'}>
                <Inclusion/>
            </Route>
            <Route path={'/intramurals'}>
                <Intramurals/>
            </Route>
            <Route path={'/leadership'}>
                <Leadership/>
            </Route>
            <Route path={'/recruitment'}>
                <Recruitment/>
            </Route>
            <Route path={'/teams'}>
                <Teams/>
            </Route>
        </Switch>
    )
}

export default App;
