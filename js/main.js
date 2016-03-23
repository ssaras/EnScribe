(function ($) {

	var enclosLogoExpanded = $("#enclos-logo-expanded"),
		enclosLogoCollapsed = $("#enclos-logo-collapsed"),
		otherArticleContainer = $("#other-article-container"),
		sideBar = $("#side-bar"),
		mainContent = $("#main-content"),
		pageContainer = $("#page-container");

	var closeSideBar = function () {
		otherArticleContainer.slideUp("fast");
		enclosLogoExpanded.hide();
		enclosLogoCollapsed.show();
		if (document.documentElement.clientWidth > 1030) {
			enclosLogoCollapsed.css({
				"width" : "10%"
			});
			sideBar.css({
				"width" : "10%"
			});
			mainContent.css({
				"width" : "83%"
			});
		} else {
			enclosLogoCollapsed.css({
				"width" : ""
			});
			sideBar.css({
				"width" : ""
			});
			mainContent.css({
				"width" : ""
			});
		}
	}

	var openSideBar = function (autoCall) {			
		otherArticleContainer.slideDown("fast");
		enclosLogoCollapsed.hide();
		enclosLogoExpanded.show();
		enclosLogoExpanded.css({
			"width" : ""
		});
		sideBar.css({
			"width" : ""
		});
		mainContent.css({
			"width" : ""
		});
	}

	$(document).ready(function() {
		$(window).resize(function(){
			if (document.documentElement.clientWidth < 1030) {
				closeSideBar();
			}
			if (document.documentElement.clientWidth > 1030) {
				openSideBar();
			}
		});
		if (document.documentElement.clientWidth < 1030) {
			closeSideBar();
		}
		enclosLogoExpanded.click(function(){
			closeSideBar();
		});
		enclosLogoCollapsed.click(function(){
			openSideBar();
		});
	});

}(jQuery));

