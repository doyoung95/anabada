import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Board from './models/Board';

const store = createStore(rootReducer, composeWithDevTools());
const boardList = new Board();
boardList.getAllFromServer();
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<App boardList={boardList} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
