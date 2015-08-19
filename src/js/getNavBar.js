var $ = require('jquery');

module.exports = function(){
	var navbar = $('.navBar .navBarButton'),
		items = navbar.map(function() {

		var item = $(this).find('.navBarButton'),
		obj = {
	  		text: $(item).text(),
	  		id: $(item).attr('id'),
	  		href: $(item).attr('href'),
	  		class: $(item).attr('class') 
	  	};
	  	return obj;

	}).get();

	return items;
};