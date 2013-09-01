

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

/*
 * Set WindowSize based on screen size (see function below)
 */
updateWindowSize();


/**
 * Open the main application Window
 */
$.index.open();

/**
 * This function is tied to the click event on the navBar menuBtn element.
 * It is responsible for sliding the menu out and back
 */
function showhidemenu(e){
	var direction = null;
	if(e){
		direction = e.direction;
	}
	App.Navigator.showhidemenu(direction);
}

/**
 * This is a test function that can be used to test click events from other elements.
 * Initially linked to the topActions ImageViews.
 * @param {Object} e
 */

$.friendsBtn.icon.addEventListener('click', testclick);
$.messagesBtn.icon.addEventListener('click', testclick);
$.notificationsBtn.icon.addEventListener('click', testclick);

function testclick(e){
	alert(e.source.id + " clicked");
}


$.friendsBtn.icon.addEventListener('touchstart', emphasize);
$.friendsBtn.icon.addEventListener('touchend', emphasize);

$.messagesBtn.icon.addEventListener('touchstart', emphasize);
$.messagesBtn.icon.addEventListener('touchend', emphasize);

$.notificationsBtn.icon.addEventListener('touchstart', emphasize);
$.notificationsBtn.icon.addEventListener('touchend', emphasize);

function emphasize(e){
	e.source.opacity = (e.source.opacity === 1.0) ? 0.5 : 1.0;
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


