import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import ContentPage from './pages/ContentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';
import MenuBar from './components/menu_bar/MenuBar';
import NavBar from './components/navbar/NavBar';
import Map from './pages/Map';
import Auth from './hoc/auth';
import Loading from './components/Loading/Loading';
import ChattingPage from './pages/ChattingPage';
import NotReady from './pages/NotReady';

function App({ boardList }) {
	return (
		<div id='main__section'>
			<div id='information'>아나바다를 이용해주셔서 감사합니다.</div>
			<div id='App'>
				<Router>
					<NavBar />
					<Loading />
					<Switch>
						<Route
							exact
							path='/'
							component={Auth(HomePage, null, boardList.getAll())}
						/>
						<Route exact path='/ready' component={Auth(NotReady)} />
						<Route exact path='/write' component={Auth(WritePage, true)} />
						<Route
							exact
							path='/content/:id'
							component={Auth(ContentPage, null, boardList)}
						/>
						<Route exact path='/chatting' component={Auth(ChattingPage)} />
						<Route exact path='/login' component={Auth(LoginPage, false)} />
						<Route
							exact
							path='/register'
							component={Auth(RegisterPage, false)}
						/>
						<Route exact path='/my' component={Auth(MyPage, true)} />
						<Route exact path='/map' component={Map} />
					</Switch>
					<MenuBar />
				</Router>
			</div>
		</div>
	);
}

export default App;
