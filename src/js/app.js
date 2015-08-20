'use strict';

var $ = require('jquery'),
	_ = require('lodash'),
	bootstrap = require('bootstrap'),
	init = require('./init'),
	setupLayout = require('./setupLayout'),
	domready = require('domready'),
	Mustache = require('mustache');


domready(function ($) {
	var Flex = window.Flex = {};
	init();
	setupLayout();
});



/*	
if(document.form !== undefined){
	if(document.form.TimeZoneOffset !== undefined){
		document.form.TimeZoneOffset.value = document.form.TimeZoneOffset.value;
	}
}
*/
	