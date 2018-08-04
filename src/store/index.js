import { createStore, compose } from 'redux';
import modules from './modules';

const isDev = process.env.NODE_ENV === 'development' || true;

const devtools = isDev && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;

const configureStore = (initialState) => {
    const enhancers = [
        devtools({
            maxAge: 1000
        })
    ];

    const store = createStore(modules, initialState, compose(...enhancers));

    // if(module.hot) {
    //     module.hot.accept('./modules', () => store.replaceReducer(modules));
    // }

    return store;

};

export default configureStore();