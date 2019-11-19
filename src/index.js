import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducer';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	// <Provider>
	<Router>
		<App />
	</Router>,
	// </Provider>
	document.getElementById('root'),
);
