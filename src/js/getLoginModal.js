'use strict';

var $ = require('jquery');

var getLoginModal = function (){
	var modalContent = $('.dxpcContent_custom.popupArea').html();
	$('.dxpcContent_custom.popupArea').remove();
	
	var modal = '<div class="modal fade"> \
				  <div class="modal-dialog"> \
				    <div class="modal-content"> \
				      <div class="modal-header"> \
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
				        <h4 class="modal-title">LOGIN</h4> \
				      </div> \
				      <div class="modal-body">'+modalContent+'</div> \
				      <div class="modal-footer"> \
				        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
				      </div> \
				    </div> \
				  </div> \
				</div>';

	return modal;
};

module.exports = getLoginModal;