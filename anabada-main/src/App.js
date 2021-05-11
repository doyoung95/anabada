import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import ContentPage from './pages/ContentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';
import Menu_bar from './components/menu_bar/Menu_bar';
import NavBar from './components/navbar/NavBar';

function App() {
	return (
		<div id='main__section'>
			<div id='information'>아나바다를 이용해주셔서 감사합니다.</div>
			<div id='App'>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/write' component={WritePage} />
						<Route exact path='/content/:id' component={ContentPage} />
						<Route exact path='/login' component={LoginPage} />
						<Route exact path='/register' component={RegisterPage} />
						<Route exact path='/mypage' component={MyPage} />
					</Switch>
					<Menu_bar />
				</Router>
			</div>
		</div>
	);
}

export default App;
