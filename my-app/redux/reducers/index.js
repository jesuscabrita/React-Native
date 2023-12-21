import { combineReducers } from 'redux';
import carritoReducer from './carritoReducer';

const rootReducer = combineReducers({
    carrito: carritoReducer,
});

export default rootReducer;