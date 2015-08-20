'use strict';

var $ = require('jquery'),
	_ = require('lodash'),
	bootstrap = require('bootstrap'),
	init = require('./init'),
	setupStoreFront = require('./setupStoreFront'),
	domready = require('domready'),
	Mustache = require('mustache'),
	getCurrentState = require('./getCurrentState');


domready(function ($) {
	
	var Flex = window.Flex = {};
	Flex.state = getCurrentState();
	init();
	
	switch(Flex.state){
		case 'adminlogin':
		case 'UserHelp':
		case 'Login':
		case 'ForgotPassword':
		case 'UserEditFormFilling':
		case 'UserEditFree':
		case 'UserEditDataMerge':
		case 'UserEditPrinting':
		case 'UserEditFinish':
		case 'UserContentShoppingCart':
		case 'UserContentOrders':
		case 'UserContentLibrary':
		case 'UserContentProfile':
		case 'UserContentPassword':
		case 'UserContentAddressBook':
		case 'UserContentAddressBookItem':
		case 'UserContentStart':
		case 'UserDatabaseSelect':
			setupStoreFront();
		break;
		default:
			$('.wrapper > table').css('display','block')
			break;
	};
	
});



/*	
if(document.form !== undefined){
	if(document.form.TimeZoneOffset !== undefined){
		document.form.TimeZoneOffset.value = document.form.TimeZoneOffset.value;
	}
}
*/
	