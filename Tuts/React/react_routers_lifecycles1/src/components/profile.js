import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
	return (
		<div>
			<Link to={{
				pathname: `${props.match.url}/posts`
			}}>take me to /profile/posts</Link>
		</div>
	)
}

export default Profile;