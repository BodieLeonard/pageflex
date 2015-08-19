var $ = require('jquery');

module.exports = function (){
	var categories = $('td.categorySidebarLabelLevel1'),
	items = categories.map(function() {
		var obj = {
			title: this.textContent.replace(/\s+/g, ' '),
			url: this.firstElementChild.href,
			classList: this.classList
		};
		obj.subCategorys = [];
		getSubCategories($(this).parent().next().find('td'), obj);
		return obj;

	}).get();
	return items;
};

function getSubCategories(tar, obj) {
	if(tar !== undefined){
	    if(tar.hasClass('categorySidebarLabelLevel2')){
    		var subCategories = tar,
    		subItems = subCategories.map(function(){
    			obj.subCategorys.push({
    				title: this.textContent.replace(/\s+/g, ' '),
					url: this.firstElementChild.href,
					classList: this.classList
	    		});
	    		getSubCategories($(tar).parent().next().find('td'), obj);
	    		return obj;
    		}).get();
    		
    		return subItems;
    	}
    }
}
