(function ($) {
	
	$(function() {
		
		function init(){
			$.extend( Flex, {
				config: {
					DEBUG: true,
					VERSION: "0.01",
					CLIENT: "PageFlex"
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

		function getSiteHeader(){
			var siteHeader = $('#siteHeader'),
			obj = {
				url: siteHeader.children('a').attr('href'),
				alt: siteHeader.children('a').children('img').attr('alt'),
				class: siteHeader.children('a').children('img').attr('class'),
				src: siteHeader.children('a').children('img').attr('src'),
			};
			return obj;
		};

		function getNavBar(){
			var navbar = $('.navBar .navBarButton'),
				items = navbar.map(function() {
					debugger;
	    		var item = $(this).find('.navBarButton'),
	    		obj = {
			  		text: $(item).text(),
			  		id: $(item).attr('id'),
			  		href: $(item).attr('href'),
			  		class: $(item).attr('class') 
			  	}
			  	return obj;

			}).get();

	    	return items;
		};

	    function getCatalogItems(){
	    	var catalogItem = $('div.catalogItemOuter'),
	    	items = catalogItem.map(function() {
	    		var item = $(this).find('.catalogThumbnailArea'),
	    		obj = {
			  		href: item.find('a').attr('href'),
			  		linkTitle: item.find('a').attr('title'),
			  		src: item.find('a img').attr('src'),
			  		imageTitle: item.find('a img').attr('title'), 
			  		title: $(this).find('.catalogFooterArea').text().replace(/\s+/g, " ")
			  	}
			  	return obj;

			}).get();

	    	return items;
	    };

	    function getCategories(){
	    	var categories = $('td.categorySidebarLabelLevel1'),
	    	items = categories.map(function() {
	    		var obj = {
	    			title: this.textContent.replace(/\s+/g, " "),
	    			url: this.firstElementChild.href,
	    			classList: this.classList
	    		}
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
		    				title: this.textContent.replace(/\s+/g, " "),
							url: this.firstElementChild.href,
							classList: this.classList
			    		})
			    		getSubCategories($(tar).parent().next().find('td'), obj)
			    		return obj;
		    		}).get()
		    		
		    		return obj;
		    	};
		    };
		};

		function getBreadCrumb(){
			var crumbs = $('.categoryPath a'),
			items = crumbs.map(function() {
	    		var obj = {
	    			title: this.title.replace(/\s+/g, " "),
	    			url: this.href,
	    			text: this.textContent.replace(/\s+/g, " ")
	    		}
	    		obj.subCategorys = [];
	    		getSubCategories($(this).parent().next().find('td'), obj);
	    		return obj;
			}).get();
			return items;
		};

		function setupLayout(){

			var menuTemplate = $('#menuTemplate').html();
			var menuView = Mustache.render(menuTemplate, Flex.layout);
        	$('.wrapper').prepend(menuView);
		};

		init();
		setupLayout();
	});



})(jQuery);