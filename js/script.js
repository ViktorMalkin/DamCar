const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return(
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};


if (isMobile.any()) {
	document.body.classList.add('_touch');
/*
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0){
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function(e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
*/

} else {
	document.body.classList.add('_pc');
}



const iconMenu = document.querySelector('.header-menu__icon');
const menuHeader = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
	});
}
/*
const headerBtmColRight = document.querySelector('.header-bottom__column--right');
const headerBtmCol = document.querySelector('.header-bottom__column');
const headerBtm = document.querySelector('.header-bottom-menu');
const headerBtmRight = document.querySelector('.header-bottom-menu--right');
//const headerTop = document.querySelector('.header-top');
const headerMenu = document.querySelector('.header__menu');
//const headerLang = document.querySelector('.header-top-lang');

window.addEventListener('resize', function(_event) {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1023) {
		//if (!headerLang.classList.contains('done')) {
			//headerMenu.insertBefore(headerLang, headerMenu.children[0]);
			//headerLang.classList.add('done');
		//}
		if (!headerBtm.classList.contains('done')) {
			headerMenu.insertBefore(headerBtm, headerMenu.children[0]);
			headerBtm.classList.add('done');
		}
		if (!headerBtmRight.classList.contains('done')) {
			headerMenu.insertBefore(headerBtmRight, headerMenu.children[1]);
			headerBtmRight.classList.add('done');
		}
	} else {
		//if (headerLang.classList.contains('done')) {
			//headerTop.insertBefore(headerLang, headerTop.children[0]);
			//headerLang.classList.remove('done');
		//}
		if (headerBtm.classList.contains('done')) {
			headerBtmCol.insertBefore(headerBtm, headerBtmCol.children[0]);
			headerBtm.classList.remove('done');
		}
		if (headerBtmRight.classList.contains('done')) {
			headerBtmColRight.insertBefore(headerBtmRight, headerBtmColRight.children[0]);
			headerBtmRight.classList.remove('done');
		}
	}
});
*/

//const ibg = document.querySelectorAll('.ibg'); {

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url('+ ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
