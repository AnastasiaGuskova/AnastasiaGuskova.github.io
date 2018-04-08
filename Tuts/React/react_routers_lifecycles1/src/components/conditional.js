import React from 'react';

const Conditional = () => {

	const returnValue = () => {
		/////
		return false;
	}

	const showIt = () => {
		return ( returnValue() ? <div>TRUE</div> : <div>FALSE</div> )
	}

	return (
		<div>
			{ showIt() }
		</div>
	)
}

export default Conditional;