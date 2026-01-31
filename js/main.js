"use strict";

document.addEventListener('DOMContentLoaded', function () {
	console.log('Site loaded');

	var navToggle = document.getElementById('nav-toggle');
	if (navToggle) {
		navToggle.addEventListener('click', function () {
			var expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			document.body.classList.toggle('nav-open');
		});
	}

	var projectCards = document.querySelectorAll('.project-card');
	projectCards.forEach(function (card) {
		card.addEventListener('click', function () {
			card.classList.toggle('selected');
		});
	});
});
