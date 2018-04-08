import React from 'react';

const PostItem = (props) => {
	return (
		<div>
			{props.match.params.username} - {props.match.params.id}
		</div>
	)
}

export default PostItem;