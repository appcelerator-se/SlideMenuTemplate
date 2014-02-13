

/**
 * Initialize the App Navigation object based on the structure of the XML File
 */
var  App = Alloy.Globals.App;
App.Navigator.init({
	mainView: $.page,	// <- The Top Level View
	menuView: $.menu,   // <- The Underlying Menu 
	contentView: $.mainWindow,  // <- The content section of the main view that is linked to the Navigator.open() method
	startPage: 'home'	// <- The page you want to start your application
});



/**
 * This function is tied to the click event on the navBar menuBtn element.
 * It is responsible for sliding the menu out and back
 */
function showhidemenu(e){
	
	var direction = null;
	if(e && e.direction){
		direction = e.direction;
		/*
		Ti.Analytics.featureEvent('app.showMenu.swipe');
		*/
	}
	else {
		/*
		Ti.Analytics.featureEvent('app.showMenu.click');
		*/
	}
	
	App.Navigator.showhidemenu(direction);
}


/*
 * Set Width of Main Window and child views to the system width
 */
function updateWindowSize(){
	var width;
	
	if(OS_ANDROID){
		var dpi = Ti.Platform.displayCaps.dpi;
		width = Ti.Platform.displayCaps.platformWidth +'px'; // <-- forcing system width over dp for Android
	}
	else {
		width = Ti.Platform.displayCaps.platformWidth;
	}

	$.index.width = $.page.width = $.mainWindow.width = width;
}

Ti.Gesture.addEventListener('orientationchange', updateWindowSize);

/*
 * Set WindowSize based on screen size (see function below)
 */
updateWindowSize();


/**
 * Open the main application Window
 */
$.index.open();