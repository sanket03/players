import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

class App extends React.Component {

    routeUser() {
        return <InitiateProfile/>
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' render = {() => ( <Login/> )}/>
                    <Route path = '/initiateProfile' render = {this.routeUser}/>
                </Switch>
            </Router>
        );
    }
}

export default App;