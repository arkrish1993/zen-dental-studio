var currentPos = 0;

function pling() {
	document.querySelector('.covid-ad').hidden = true;
}

function showMenu(menuClass) {
	document.getElementsByClassName(menuClass)[0].style.display = 'block';
}

function closeMenu(menuClass) {
	document.getElementsByClassName(menuClass)[0].style.display = '';
}

function modifyLinks() {
	let currentElement = event.currentTarget.innerText;
	let allLinks = document.getElementsByClassName('link');
	let allLinksArr = Array.from(allLinks);
	allLinksArr.forEach(function (link, index) {
		let classList = allLinks[index].querySelector('.nav-link').classList;
		if (link.innerText !== currentElement) {
			classList.add('grey-text');
			classList.remove('black-text');
		} else {
			classList.add('black-text');
			classList.remove('grey-text')
		}
	});
}

function setDefaults() {
	let allLinks = document.getElementsByClassName('link');
	let allLinksArr = Array.from(allLinks);
	allLinksArr.forEach(function (link, index) {
		let classList = allLinks[index].querySelector('.nav-link').classList;
		classList.add('black-text');
		classList.remove('grey-text');
	});
}

function toggle(option) {
	let optionEl = document.querySelector('#' + option);
	if (optionEl.classList.contains('show')) {
		optionEl.classList.remove('show');
		optionEl.querySelector('.animated').classList.add('fadeInUp');
		optionEl.querySelector('.animated').classList.remove('fadeInDown');
	} else {
		optionEl.classList.add('show');
		optionEl.querySelector('.animated').classList.remove('fadeInUp');
		optionEl.querySelector('.animated').classList.add('fadeInDown');
	}
}

function setActiveSlide(action) {
	let slides = document.getElementsByClassName('carousel-item');
	let slidesArr = Array.from(slides);
	slidesArr.forEach(function (slide, slidePos) {
		let classList = slides[slidePos].classList;
		if (this.currentPos !== slidePos) {
			classList.remove('active');
		} else {
			classList.add('active');
			if (action === 'next') {
				classList.remove('slideInLeft');
				classList.add('slideInRight');
			} else {
				classList.remove('slideInRight');
				classList.add('slideInLeft');
			}
		}
	});
}

function shiftNext() {
	if (this.currentPos === 3) {
		this.currentPos = 0;
	} else {
		this.currentPos++;
	}
	this.setActiveSlide('next');
}

function shiftPrev() {
	if (this.currentPos === 0) {
		this.currentPos = 3;
	} else {
		this.currentPos--;
	}
	this.setActiveSlide('prev');
}