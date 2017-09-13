import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import Video from './components/Video';
import Login from './components/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Root extends Component {
    render() {
        return (
             <MuiThemeProvider>
            <div className="Root">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/feed" component={Video} />
                    </Switch>
                </Router>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Root;