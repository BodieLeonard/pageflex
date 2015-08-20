'use strict';

var $ = require('jquery');

var getBreadCrumb = function (){
	var crumbs = $('.categoryPath a'),
	items = crumbs.map(function() {
		var obj = {
			title: this.title.replace(/\s+/g, ' '),
			url: this.href,
			text: this.textContent.replace(/\s+/g, ' ')
		};
		obj.subCategorys = [];
		//getSubCategories($(this).parent().next().find('td'), obj);
		return obj;
	}).get();
	return items;
};

module.exports = getBreadCrumb;