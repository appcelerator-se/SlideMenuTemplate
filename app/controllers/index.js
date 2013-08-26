

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
$.notificationsBtn.addEventListener('click', testclick);

$.friendsBtn.icon.addEventListener('touchstart', emphasize);
$.friendsBtn.icon.addEventListener('touchend', emphasize);
function testclick(e){
	alert(e.source.id + " clicked");
}

function emphasize(e){
	$.friendsBtn.icon.opacity = ($.friendsBtn.icon.opacity === 1.0) ? 0.5 : 1.0;
}



