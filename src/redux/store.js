import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

// -- First setting middlewares to emprty
const middlewares = [sagaMiddleware];

// -- Checks what environment the app is running on
// -- Only loads logger if in development environment
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// -- sagaMiddleware.run()

export const persistor = persistStore(store)

export default { store, persistor };