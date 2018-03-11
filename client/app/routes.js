import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackingComponent from './components/TrackingComponent';
import AddingComponent from './components/AddingComponent';

export default () =>(
<BrowserRouter>
<div className="home">
    <div className="top">
  <Link to='/add' className="my-link">Add order</Link>
  <Link to='/track' className="my-link">Track order</Link>
    </div>
    <Switch>
        <Route path="/add" exact component={AddingComponent} />
        <Route path="/track" exact component={TrackingComponent} />
    </Switch>
    </div>
</BrowserRouter>
);
