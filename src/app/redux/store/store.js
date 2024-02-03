import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers } from "redux";
import setConnection from '../reducers/introductionReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducers = combineReducers({
    connection: setConnection,
});


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //blacklist: ['account']
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: false
});

export default store
