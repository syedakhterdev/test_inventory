/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './components/User/List';
import Add from './components/User/Add';
import Edit from "./components/User/Edit";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

const App = () => {
    return (
        <div className="">
            <Switch>
                <Route path="/" component={List} exact />
                <Route path="/user/add" component={Add} />
                <Route path="/user/:id/edit" component={Edit} />
            </Switch>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('app'));
}
