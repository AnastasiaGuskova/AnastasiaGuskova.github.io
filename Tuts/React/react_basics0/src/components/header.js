import React from 'react';

const Header = (props) => {
	return (
		<header className='active'>
			<div className="logo">Logo</div>
			<input type="text" onChange={props.keywords}/>
		</header>
	) 
}

export default Header;