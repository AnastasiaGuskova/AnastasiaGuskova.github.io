import React, { Component } from 'react';

class Life extends Component {
	// 1 get default props

	// 2 set default state
	state = {
		title: 'Life Cycles'
	}

	// 3 before render
	componentWillMount() {
		console.log('3 before render');
	}

	componentWillUpdate() {
		console.log('before UPDATE');
	}

	componentDidUpdate() {
		console.log('after UPDATE');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.state.title);
		console.log(nextState.title);
		if (nextState.title === 'smth else') {
			return false;
		}
		return true;
	}

	componentWillReceiveProps() {
		console.log('before RECEIVE PROPS');
	}

	componentWillUnmount() {
		console.log('UNMOUNT');
	}

	// 4 render jsx

	render() {
		console.log('RENDER');
		return(
			<div>
				<h3>{this.state.title}</h3>
				<div onClick={() => this.setState({title:'smth elsee'})}>
					CLICK TO CHANGE
				</div>
			</div>
		)
	}

	// 5 after render
	componentDidMount(){
		console.log('5 after render');
	}
}

export default Life;