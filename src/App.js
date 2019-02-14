import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./Components/NotFound";
import Software from "./Components/Software";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Account from "./Components/Account";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/apps" component={Software} exact/>
                        <Route path="/account" component={Account} exact/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
