'use strict';

var getCurrentState = function (){
	var pathArray = window.location.pathname.split( '/' );
	var currentState = pathArray.pop().split('.')[0];
	return currentState;
};

module.exports = getCurrentState;