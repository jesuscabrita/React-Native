import { configureStore } from '@reduxjs/toolkit';
import { api } from '../service/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import carritoReducer from './reducers/carritoReducer';
import { authApi } from '../service/auth';
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: authApi.reducer,
        carrito: carritoReducer,
        auth: authReducer,   
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;