'use strict';

var $ = require('jquery');

var getCatalogItems = function(){
	var catalogItem = $('div.catalogItemOuter'),
	items = catalogItem.map(function() {
		var item = $(this).find('.catalogThumbnailArea'),
		obj = {
	  		href: item.find('a').attr('href'),
	  		linkTitle: item.find('a').attr('title'),
	  		src: item.find('a img').attr('src'),
	  		imageTitle: item.find('a img').attr('title'), 
	  		title: $(this).find('.catalogFooterArea').text().replace(/\s+/g, ' ')
	  	};
	  	return obj;

	}).get();

	return items;
};

module.exports = getCatalogItems;