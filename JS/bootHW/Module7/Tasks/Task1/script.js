function createUserCard() {
	const userItem = document.createElement('div');
	userItem.classList.add('user-item');

	const userContainer = document.createElement('div');
	userContainer.classList.add('user-container');
	userItem.append(userContainer);

	const userPhoto = document.createElement('div');
	userPhoto.style.backgroundImage = 'url(images/photo1.jpg)';
	userPhoto.classList.add('user-photo');
	userContainer.append(userPhoto);

	const userData = document.createElement('div');
	userData.classList.add('user-data');
	userContainer.append(userData);

	const userName = document.createElement('p');
	userName.textContent = 'Markhor Schraubenziege';
	userName.classList.add('user-name');
	userData.append(userName);

	const userInfo = document.createElement('p');
	userInfo.textContent = '7 : Zoo, Augsburg';
	userInfo.classList.add('user-info');
	userData.append(userInfo);

	const userCounter = document.createElement('ul');
	userCounter.classList.add('user-counter');
	userData.append(userCounter);

	const userStrawberrie = document.createElement('li');
	userStrawberrie.textContent = '19';
	userStrawberrie.classList.add('user-strawberry');
	userCounter.append(userStrawberrie);

	const userLemon = document.createElement('li');
	userLemon.textContent = '5';
	userLemon.classList.add('user-lemon');
	userCounter.append(userLemon);

	const userLinkWrapper = document.createElement('li');
	userCounter.append(userLinkWrapper);

	const userLink = document.createElement('a');
	userLink.classList.add('user-link');
	userLink.setAttribute('href', '#');
	userLinkWrapper.append(userLink);

	return userItem;
}

document.querySelector('.wrapper').append(createUserCard());