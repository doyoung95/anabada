import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import ContentPage from './pages/ContentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Router>
				<div style={{ height: '20px' }}></div>
				<NavBar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/write' component={WritePage} />
					<Route exact path='/content' component={ContentPage} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/register' component={RegisterPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
