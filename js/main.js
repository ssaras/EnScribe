(function ($) {

	var enclosLogoExpanded = $("#enclos-logo-expanded"),
		enclosLogoCollapsed = $("#enclos-logo-collapsed"),
		otherArticleContainer = $("#other-article-container"),
		sideBar = $("#side-bar"),
		mainContent = $("#main-content"),
		pageContainer = $("#page-container");

	var closeSideBar = function () {		
		// if (document.documentElement.clientWidth > 1030) {
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
		// if (document.documentElement.clientWidth > 1030 || autoCall) {			
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
		// }
	}

	var moveSideBarDown = function () {
		var sideBarClone = sideBar.clone();
		sideBar.remove();
		pageContainer.append(sideBarClone);
	}

	var moveSideBarUp = function () {
		var sideBarClone = sideBar.clone();
		sideBar.remove();
		pageContainer.prepend(sideBarClone);
	}

	$(document).ready(function() {
		var triggered = false;
		var triggered2 = false;
		$(window).resize(function(){
			if (document.documentElement.clientWidth < 1030) {
				closeSideBar();
			}
			if (document.documentElement.clientWidth > 1030) {
				openSideBar();
			}
			// if (document.documentElement.clientWidth < 1030) {
			// 	openSideBar(true);
			// 	if(!triggered){
			// 		triggered = true;
			// 		moveSideBarDown();
			// 	}				
			// } 
			// if (document.documentElement.clientWidth > 1030) {
			// 	if(!triggered2){
			// 		triggered = true;
			// 		moveSideBarUp();
			// 	}
			// }
		});
		if (document.documentElement.clientWidth < 1030) {
			closeSideBar(true);
			moveSideBarDown();
		}
		enclosLogoExpanded.click(function(){
			closeSideBar();
		});
		enclosLogoCollapsed.click(function(){
			openSideBar();
		});

	});

}(jQuery));

