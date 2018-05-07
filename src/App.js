import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './home';
import Stuff from './stuff';
import createUser from './components/user/createUserPage';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">My Budget App</h1>
                        <ul className="header">
                            <li>
                                <NavLink exact to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stuff">Stuff</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Create user</NavLink>
                            </li>
                        </ul>
                    </header>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/register" component={createUser} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
