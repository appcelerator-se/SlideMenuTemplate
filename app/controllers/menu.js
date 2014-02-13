
var App = Alloy.Globals.App;

/**
 * Menu Page Navigation Based on TableView Event Listener and 
 * "page" attribute on TableViewRow in menu.xml
 */
$.tableView.addEventListener("click", function(e){
	
	if(e.rowData && e.rowData.page){
		App.Navigator.open(e.rowData.page);
		/*
		Ti.Analytics.featureEvent('app.menuClick.'+e.rowData.page);
		 */
	}
	
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

$.btnProfile.addEventListener("click", function(e){
	
	App.Navigator.open(e.source.page);
	
	/*
	Ti.Analytics.featureEvent('app.menuClick.'+e.source.page);
	*/
		
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

$.settingsBtn.addEventListener("click", function(e){
	
	App.Navigator.modal(e.source.page);
	
	/*
	Ti.Analytics.featureEvent('app.menuClick.'+e.source.page);
	*/
	
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

