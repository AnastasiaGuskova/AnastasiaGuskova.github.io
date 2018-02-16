let users = [];

users[0]  = {
	img: 'images/photo1.jpg',
	name: 'Markhor Capra Falconeri',
	age: 7,
	location: 'Zoo, Augsburg',
	strawberries: 19,
	lemons: 5
};

users[1] = {
	img: 'images/photo2.jpg',
	name: 'Fliyng Hippo',
	age: 12,
	location: 'Africa, Cannabis Field',
	strawberries: 73,
	lemons: 0
}

users[2] = {
	img: 'images/photo3.jpg',
	name: 'Bold Sheriff',
	age: 'Young at heart',
	location: 'Wild Wild West',
	strawberries: 1,
	lemons: 13
}

function createUserCard(user) {
	const userCard = 
	`<div class="user-item">
		<div class="user-container">
			<div class="user-photo" style="background-image: url(${user.img});">
			</div>
			<div class="user-data">
				<p class="user-name">${user.name}</p>
				<p class="user-info">${user.age} : ${user.location}</p>
				<ul class="user-counter">
					<li class="user-strawberry">${user.strawberries}</li>
					<li class="user-lemon">${user.lemons}</li>
					<li><a class="user-link" href="#"></a></li>
				</ul>
			</user
		</div>
	</div>`;
	return userCard;
}

for (let i = 0; i < users.length; i++) {
	document.querySelector('.wrapper').
		insertAdjacentHTML('beforeend', createUserCard(users[i]));
}


