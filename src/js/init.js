'use strict';

var $ = require('jquery'),
	getSiteHeader = require('./getSiteHeader'),
	getNavBar = require('./getNavBar'),
	getBreadCrumb = require('./getBreadCrumb'),
	getCatalogItems = require('./getCatalogItems'),
	getCategories = require('./getCategories');

var init = function (){
	$.extend( Flex, {
		config: {
			DEBUG: true,
			VERSION: '0.01',
			CLIENT: 'PageFlex'
		}
	});
	$.extend( Flex, {
		layout: {
			siteHeader: getSiteHeader(),
			navBar: getNavBar(),
			breadCrumb: getBreadCrumb()
		},
		store:{
			catalogItems: getCatalogItems(),
			categories: getCategories()
		},
	});
};

module.exports = init;