import {combineReducers} from 'redux';
import users from './users';

const allReducers = combineReducers({
    // short hand property names
    users
});

export default allReducers;
