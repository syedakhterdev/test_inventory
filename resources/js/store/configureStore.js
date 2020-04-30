import {createStore} from 'redux';
import allReducers from '../reducers/index';

export default function configureStore() {
    return createStore(
        allReducers,
    );
}
