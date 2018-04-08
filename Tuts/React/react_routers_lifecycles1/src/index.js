import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import Conditional from './components/conditional';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<header>
					<NavLink to='/' activeStyle={{}} activeClassName=''>Home</NavLink><br/>
					<NavLink to='/posts'>Posts</NavLink><br/>
					<NavLink to='/profile'>Profile</NavLink><br/>
					<NavLink to='/life'>Life</NavLink><br/>
					<NavLink to='/conditional'>Conditional</NavLink><br/>
					<hr/>
				</header>
				<Switch>
					<Route path='/posts/:id/:username' component={PostItem}/>
					<Route path='/posts' component={Posts}/>
					<Route path='/profile' component={Profile}/>
					<Route path='/life' component={Life}/>
					<Route path='/conditional' component={Conditional}/>
					<Route path='/' exact component={Home}/>
					<Route render = {() => <h3>Oops, 404.</h3>}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(
	<App/>, document.querySelector('#root')
)