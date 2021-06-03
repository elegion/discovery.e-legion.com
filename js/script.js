"use strict";

function pageInit() {
	stickyInit();
}

function stickyInit() {
	var pageHeader = document.getElementById("header");
	var header = pageHeader.querySelector(".header");
	var form = document.getElementById("consultation-form");
	var stage = document.getElementById("stage");

	var top = pageHeader.offsetTop;
	var formTop = form.offsetTop;
	var stageTop = stage.offsetTop;
	var stageHeight = stage.offsetHeight;
	var fixedClass = "page__header_fixed";
	var blurClass = "page__header_blur";
	var fadeClass = "page__header_fade";
	var headerConsultClass = "header_consult";

	if (isFirefox() || isIE()) {
		pageHeader.classList.add(fadeClass);
	}
	else {
		pageHeader.classList.add(blurClass);
	}

	function stickyControl() {
		if (window.pageYOffset > top) {
			pageHeader.classList.add(fixedClass);
		} else {
			pageHeader.classList.remove(fixedClass);
		}

		if (window.pageYOffset > stageTop + stageHeight && window.pageYOffset < formTop - window.innerHeight) {
			header.classList.add(headerConsultClass);
		}
		else {
			header.classList.remove(headerConsultClass);
		}

	}

	window.addEventListener('scroll', stickyControl);
}

function isFirefox() {
	return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function isIE() {
	return window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}



document.addEventListener("DOMContentLoaded", () => {
	pageInit();
});
