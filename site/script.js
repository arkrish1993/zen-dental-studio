/** 
 * Variable storing current active carousel slide.
 */
var currentPos = 0;

/**
 * Function to close Covid-19 banner at the top.
 */
function closeCovid() {
	document.querySelector('.covid-ad').hidden = true;
}

/** 
 * Function to show the dropdown menu for Navigation menu option on mouseenter event.
 */
function showMenu(menuClass) {
	document.getElementsByClassName(menuClass)[0].style.display = 'block';
}

/** 
 * Function to close the dropdown menu for Navigation menu option on mouseleave event.
 */
function closeMenu(menuClass) {
	document.getElementsByClassName(menuClass)[0].style.display = '';
}

/** 
 * Function to change colours of Navigation menu options depending on whih one is in focus.
 */
function toggleColour() {
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

/** 
 * Function to set default colour for all Navigation menu options.
 */
function setDefaults() {
	let allLinks = document.getElementsByClassName('link');
	let allLinksArr = Array.from(allLinks);
	allLinksArr.forEach(function (link, index) {
		let classList = allLinks[index].querySelector('.nav-link').classList;
		classList.add('black-text');
		classList.remove('grey-text');
	});
}

/** 
 * Function to toggle accordion options, in 'Our values' section, on click.
 */
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

/** 
 * Function to show the current active carousel slide.
 */
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

/** 
 * Function to shift to the next carousel slide.
 */
function shiftNext() {
	if (this.currentPos === 3) {
		this.currentPos = 0;
	} else {
		this.currentPos++;
	}
	this.setActiveSlide('next');
}

/** 
 * Function to shift to the previous carousel slide.
 */
function shiftPrev() {
	if (this.currentPos === 0) {
		this.currentPos = 3;
	} else {
		this.currentPos--;
	}
	this.setActiveSlide('prev');
}

/** 
 * Function to open overlay menu on clicking the hamburger icon.
 */
function openNav() {
	document.getElementById("mini-menu").style.width = "100%";
	document.body.style.overflow = 'hidden';
	this.goBack('about');
	this.goBack('patients');
}

/** 
 * Function to close overlay menu on clicking the close icon.
 */
function closeNav() {
	document.body.style.overflow = 'auto';
	document.getElementById("mini-menu").style.width = "0%";
}

/** 
 * Function to show sub-menu option on clicking an option in the overlay menu, if applicable.
 */
function moveToSubmenu(menu) {
	document.querySelector('.' + menu).style.display = 'block';
	document.querySelector('.main-menu').hidden = true;
}

/** 
 * Function to go back to main overlay menu on clicking Back option in sub-menu.
 */
function goBack(menu) {
	document.querySelector('.' + menu).style.display = '';
	document.querySelector('.main-menu').hidden = false;
}