
var App = Alloy.Globals.App;

/*
 * For the Settings Animation to work we need to programmatically set the top of
 * the SettingsView
 */
$.settingsView.top = Ti.Platform.displayCaps.platformHeight - 74;

/**
 * Menu Page Navigation Based on TableView Event Listener and 
 * "page" attribute on TableViewRow in menu.xml
 */
$.tableView.addEventListener("click", function(e){
	Ti.API.info(JSON.stringify(e));
	if(e.rowData && e.rowData.page){
		App.Navigator.open(e.rowData.page);
	}
	
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

$.btnProfile.addEventListener("click", function(e){
	Ti.API.info(JSON.stringify(e));
	App.Navigator.open(e.source.page);
	
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

var settingsVisible = false;
var settingsController = null;
$.settingsBtn.addEventListener("click", function(e){
	
	Ti.API.info('Settings State = '+ settingsVisible);
	
	App.Navigator.modal('settings');
	
	/*
	 * Cancel the bubbling up of the event (hiding the menu is handled by the App.Navigator.open method)
	 */
	e.cancelBubble = true;
});

