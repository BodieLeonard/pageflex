'use strict';
var $ = require('jquery');

var getSiteHeader = function (){
	var siteHeader = $('#siteHeader'),
	obj = {
		url: siteHeader.children('a').attr('href'),
		alt: siteHeader.children('a').children('img').attr('alt'),
		class: siteHeader.children('a').children('img').attr('class'),
		src: siteHeader.children('a').children('img').attr('src'),
	};
	return obj;
};

module.exports = getSiteHeader;