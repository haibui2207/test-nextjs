import createSagaMiddleware from 'redux-saga';
import { intlReducer } from 'react-intl-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import messages from '../intl';
import { storageUtil } from '../utils';
import { DEFAULT_LOCALE } from '../configs';

import rootSagas from './sagas';
import rootDucks from './ducks';

const locale = storageUtil.getLocale() || DEFAULT_LOCALE;

/**
 * Initial redux saga state
 */
const initialState = {
  intl: { locale, messages: messages[locale] },
};
/**
 * More infomation read here
 * https://redux-saga.js.org/docs/api/#createsagamiddlewareoptions
 */
const sagaMiddleware = createSagaMiddleware();
/**
 * Using Redux DevTools Extension to debug Redux's state on browser
 * https://github.com/zalmoxisus/redux-devtools-extension
 */
const composeEnhancers =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/**
 * Add external middlewares connect to Redux store
 */
const middlewares = [sagaMiddleware];
const rootReducers = combineReducers({
  intl: intlReducer,
  ...rootDucks,
});
/**
 * Redux store
 */
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// start middleware
sagaMiddleware.run(rootSagas);

export default store;
