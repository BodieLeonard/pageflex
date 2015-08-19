var $ = require('jquery'),
	Mustache = require('mustache');

module.exports = function(Flex){

	var menuTemplate = $('#menuTemplate').html();
	var menuView = Mustache.render(menuTemplate, Flex.layout);
	$('.wrapper').prepend(menuView);
};