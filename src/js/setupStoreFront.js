'use strict';

var $ = require('jquery'),
	Mustache = require('mustache'),
	loginModal = require('./getLoginModal');

var setupStoreFront = function(){

	var wrapper = $('.wrapper');
	var container = "<div class='container-fluid'/>";
	var containerRow = $("<div class='row'/>");
	
	var menuTemplate = $('#menuTemplate').html();
	var menuView = Mustache.render(menuTemplate, Flex.layout);

	var submenuTemplate = $('#submenuTemplate').html();
	var submenuView = Mustache.render(submenuTemplate, Flex.store);

	var catalogTemplate = $('#catalogTemplate').html();
	var catalogView = Mustache.render(catalogTemplate, Flex.store);

	wrapper.prepend(container);
	wrapper.prepend(menuView);
	wrapper.append(loginModal());

	$(">.container-fluid", wrapper).append(containerRow);
	$(">.container-fluid >.row", wrapper).append(submenuView);
	$(">.container-fluid >.row", wrapper).append(catalogView);

};


module.exports = setupStoreFront;