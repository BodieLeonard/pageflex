'use strict';
var $ = require('jquery');

var getNavBar = function(){
	var navbar = $('.navBar .navBarLeft .navBarCell'),
		items = navbar.map(function() {

		var item = $(this).find('a'),
		obj = {
	  		text: $(item).text(),
	  		id: $(item).attr('id'),
	  		href: $(item).attr('href'),
	  		class: $(item).attr('class'),
	  	};
	  	if(item.attr("onClick") !== undefined){
	  		obj.events= item.attr("onClick");
	  	};
	  	return obj;

	}).get();

	return items;
};
module.exports = getNavBar;