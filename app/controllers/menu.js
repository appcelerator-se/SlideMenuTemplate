
var App = Alloy.Globals.App;

/**
 * Menu Page Navigation Based on TableView Event Listener and 
 * "page" attribute on TableViewRow in menu.xml
 */
$.tableView.addEventListener("click", function(e){
	Ti.API.info(JSON.stringify(e));
	if(e.rowData && e.rowData.page){
		App.Navigator.open(e.rowData.page);
	}
});

$.btnProfile.addEventListener("click", function(e){
	Ti.API.info(JSON.stringify(e));
	App.Navigator.open(e.source.page);
});

$.btnSettings.addEventListener("click", function(e){
	Ti.API.info(JSON.stringify(e));
	App.Navigator.open(e.source.page);
});