'use strict';

var $ = require('jquery'),
	Mustache = require('mustache');

var getLoginModal = function (){
	var modalContent = $('.dxpcContent_custom.popupArea').html();
	$('.dxpcContent_custom.popupArea').remove();
	
	var modalTemplate = $('#modalTemplate').html();
	var modalView = Mustache.render(modalTemplate, modalContent);

	return modalView;
};

module.exports = getLoginModal;