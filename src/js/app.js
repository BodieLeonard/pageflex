var $ = require('jquery'), 
	init = require('./init'),
	setupLayout = require('./setupLayout');


(function ($) {
	

	

	var Flex = window.Flex = {};

	$(function() {
		/*if(document.form !== undefined){
			if(document.form.TimeZoneOffset !== undefined){
				document.form.TimeZoneOffset.value = document.form.TimeZoneOffset.value;
			}
		}*/

		init(Flex);
		setupLayout(Flex);
	});

})($);