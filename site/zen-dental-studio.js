var currentPos = 0;

function closeCovid() {
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
	let collapseItems = document.getElementsByClassName('collapse');
	let collapseArr = Array.from(collapseItems);
	let optionEl = document.querySelector('#' + option);
	collapseArr.forEach(function (item, index) {
		let itemClassList = collapseItems[index].classList;
		let animatedClassList = collapseItems[index].querySelector('.animated').classList;
		if (item.id === optionEl.id) {
			if (itemClassList.contains('show')) {
				itemClassList.remove('show');
				animatedClassList.add('fadeInUp');
				animatedClassList.remove('fadeInDown');
			} else {
				itemClassList.add('show');
				animatedClassList.remove('fadeInUp');
				animatedClassList.add('fadeInDown');
			}
		} else {
			itemClassList.remove('show');
			animatedClassList.add('fadeInUp');
			animatedClassList.remove('fadeInDown');
		}
	});
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

function openNav() {
	document.getElementById("myNav").style.width = "100%";
	document.body.style.overflow = 'hidden';
	this.goBack('about');
	this.goBack('patients');
}
  
function closeNav() {
	document.body.style.overflow = 'auto';
	document.getElementById("myNav").style.width = "0%";
}

function moveToSubmenu(menu) {
	document.querySelector('.' + menu).style.display = 'block';
	document.querySelector('.main-menu').hidden = true;
}

function goBack(menu) {
	document.querySelector('.' + menu).style.display = '';
	document.querySelector('.main-menu').hidden = false;
}
  