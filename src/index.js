import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import App from "./App";


const rerenderDomTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderDomTree();

store.subscribe(() => {
    rerenderDomTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
