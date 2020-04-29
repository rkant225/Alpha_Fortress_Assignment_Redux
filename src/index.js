import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';  // redux
import {Provider} from 'react-redux'; //react-redux

import App from './components/App'
import rootReducer from './Redux/Reducers';

const store = createStore(rootReducer); // store for our application

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));