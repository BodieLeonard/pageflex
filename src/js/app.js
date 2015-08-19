var init = require('./init'),
	setupLayout = require('./setupLayout'),
	domready = require('domready');


domready(function () {
	var Flex = window.Flex = {};
	init(Flex);
	setupLayout(Flex);
});



/*	
if(document.form !== undefined){
	if(document.form.TimeZoneOffset !== undefined){
		document.form.TimeZoneOffset.value = document.form.TimeZoneOffset.value;
	}
}
*/
	