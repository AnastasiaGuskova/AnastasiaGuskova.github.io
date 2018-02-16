function createUserCard() {
	const userCard = 
	`<div class="user-item">
		<div class="user-container">
			<div class="user-photo" style="background-image: url(images/photo1.jpg);">
			</div>
			<div class="user-data">
				<p class="user-name">Markhor Schraubenziege</p>
				<p class="user-info">7 : Zoo, Augsburg</p>
				<ul class="user-counter">
					<li class="user-strawberry">19</li>
					<li class="user-lemon">5</li>
					<li><a class="user-link" href="#"></a></li>
				</ul>
			</div>
		</div>
	</div>`;
	return userCard;
}

document.querySelector('.wrapper').innerHTML = createUserCard();
