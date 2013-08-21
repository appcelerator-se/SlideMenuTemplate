// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};



/* 
 * App Singleton
 * @type {Object}
 */
Alloy.Globals.App = {
	
	/**
	 * Applications Settings
	 */
	Settings: {
		menuWidth: "265dp"
	},
	
	/**
	 * Navigation Widget using for routing controllers
	 * @type {Object}
	 */
	Navigator: {
		menuView: null,		// The underlying view that encompasses the menu
		mainView: null,		// The top most view that represents the main UI
		contentView: null,	// The content area of the mainView - this is linked to the Navigator.open() method
		currentController: null,	// A reference to the currentController being viewed within the contentView
		menuVisible: false,			// Flag to denote if the menu view is being show or not
		
		/**
		 * init - initializes the Navigator obejct, by setting the necessary views to the corresponding 
		 * views declared within the XML
		 * @type {Object} _params : {menuView, mainView, contentView} references to Ti.UI.View Objects
		 */
		init: function(_params){
			this.menuView =_params.menuView;
			this.mainView = _params.mainView;
			this.contentView = _params.contentView;
			Ti.API.debug("Navigator.init - complete");
			
			_params.startPage && this.open(_params.startPage);
		},
		
		
		/**
		 * open - responsible for opening new views into the contentView. Additionally handles the removal of pre-existing views
		 * @type {String} _controller : the name of the view/controller you want to open
		 * @type {Object} _options : additional properties you want to pass into the new view/controller 
		 */
		open: function(_controller, _options){
			
			if( _controller && this.contentView) {
				
				if( (this.currentController && (_controller !== this.currentController.getView().id)) // If the user is clicking on a different menu item
					||  !this.currentController ) { // OR there is no defined current controller
					
					/**
					 * Record the navigation event in Analytics if a currentController exists otherwise create a feature event for the new session
					 */
					this.currentController && Ti.Analytics.navEvent( this.currentController.getView().id, _controller) 
										   || Ti.Analytics.featureEvent("new_session", null);
					
					
					/**
					 * If we have a reference to an existing view/controller, lets make sure to remove it
					 * from the contentView and set it to null (otherwise you get a memory leak)
					 */
					if(this.currentController){
						this.contentView.remove(this.currentController.getView()); // <- You MUST remove the view before setting the controller to null!
						this.currentController = null; // releases the memory
						Ti.API.info('Old View Collected!');
					}
					/**
					 * If the menu is visible, lets close the primary view
					 */
					this.menuVisible && this.showhidemenu();
					
					/**
					 * Create a your new controller and add its view to the contentView
					 */
					this.currentController = Alloy.createController(_controller, _options);
					this.contentView.add(this.currentController.getView());
				}
			}
			else {
				Ti.API.error("Either a controller was not specified or the Navigator object has not been properly initiallized.");
			}
			
			Ti.API.debug("Navigator.open - complete");
		},
		 
		modal: function(_controller, _options) {
			
			if(_controller){
				/**
				 * Create a new window to handle the modal dialog
				 */
				var modalWin = Ti.UI.createWindow();
				
				/**
				 * Create the view controller, and add the primary view to the modal window
				 */
				var modalController = Alloy.createController(_controller, _options);
				modalWin.add(modalWin.getView());
				
				/**
				 * Open the window as modal
				 */
				modalWin.open({modal: true});
				
			}
			else {
				Ti.API.error("Mandatory parameter '_controller' not specified");
			}
		},
		
		/**
		 * showhidemenu  - Manages the function to hide or display the unerlying menu
		 * @type {String} direction - optional. If you want to trigger the menu based on a swipe, pass in the
		 * 							 string from the swipe gesture that represents direction and the function
		 *  							 will determine if the menu should open based on state
		 */
		showhidemenu: function(direction) {
			
			Ti.API.info('showhidemenu');
			/**
			 * Use the actual screen dimensions for the calculations
			 */
			if(OS_ANDROID) // ANDROID HACK - Because we are setting the system units to DP we need to divide by 2 on Android
				this.mainView.width=Ti.Platform.displayCaps.platformWidth/2;
			else
				this.mainView.width = Ti.Platform.displayCaps.platformWidth
			
			
			/**
			 * Animate the mainView x pixels based on the App Settings (see above) if it currently isn't open, if its open move it back to the left
			 */
			var l =  !this.menuVisible ? Alloy.Globals.App.Settings.menuWidth : 0;
			
			if( !direction || 								 // <- No swipe input - just open the menu
				(direction === 'left' && this.menuVisible) ||  // <- If swiping left and the menu is open close it
				(direction ==='right' && !this.menuVisible)) {  // <- If swiping right and the menu is closed, open it
				
				this.mainView.animate({
					left: l,
					duration:100
				});
				
				this.menuVisible = !this.menuVisible
			}
		}
	},
	
	/**
	 * Initialize the application
	 * NOTE: This should only be fired in index controller file and only once.
	 * @type {Function}
	 */
	init: function() {
		// TODO: Sanity Check to make sure globals are set properly
		
		// Global system Events -- see below for more information
		Ti.Network.addEventListener('change', _.bind(this.networkObserverUpdate, this));
		Ti.App.addEventListener('pause', _.bind(this.exit, this));
		Ti.App.addEventListener('close', _.bind(this.exit, this));
		Ti.App.addEventListener('resume', _.bind(this.resume, this));
		Ti.Gesture.addEventListener('orientationchange', _.bind(this.orientationObserverUpdate, this));
		
		// Register push-notifications
		this.registerPush();
	},
	
	/**
	 * Registers the app for push notifications
	 */
	registerPush: function() {
		this.log('debug', 'APP.registerPush');
	},
	/**
	 * Global network event handler
	 * @param {Object} _event Standard Ti callback
	 */
	networkObserverUpdate: function(_event) {
		this.log('debug', 'APP.networkObserverUpdate');
	},
	/**
     * Sets the current orientation of the device constant
     * @type {String}
     */
    currentOrientation: (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) ? 'landscape' : 'portrait',
	/**
	 * Global orientation change event handler
	 * @param {Object} e Standard Ti callback
	 */
	orientationObserverUpdate: function(e) {
		this.log('debug', 'APP.orientationObserverUpdate');
		
		// Shortcut for current orientation
		var type = (e.orientation == Ti.UI.LANDSCAPE_LEFT || e.orientation == Ti.UI.LANDSCAPE_RIGHT) ? 'landscape' : 'portrait';
        
		// Make sure it's a different orientation before proceeding
		if (this.currentOrientation != type) {
			// If it's an undesired orientation, just ignore
			if (e.orientation == Ti.UI.FACE_UP || e.orientation == Ti.UI.FACE_DOWN || e.orientation == Ti.UI.UNKNOWN ) return;
            
			//Saves the current orientation
			this.currentOrientation = type;
			
			if (this.Navigator.currentController && this.Navigation.currentController.orientationUpdate) {
            	this.Navigation.currentController.orientationUpdate(type);
            }
			
			Ti.App.fireEvent('updateOrientation', {
				orientation: type
			});
        }
	},
	/**
	 * Exit event observer
	 */
	exit: function() {
		this.log('debug', 'APP.exit');
	},
	/**
	 * Resume event observer
	 */
	resume: function() {
		this.log('debug', 'APP.resume');
	},
	/**
	 * Pause event observer
	 */
	pause: function() {
		this.log('debug', 'APP.pause');
	},
	/**
	 * Logger utility for console data
	 */
	log: function(_serverity, _msg) {
		switch(_serverity.toLowerCase()) {
			case 'debug':
				Ti.API.info(_msg);
				break;
			case 'error':
				Ti.API.error(_msg);
				break;
			case 'info':
				Ti.API.info(_msg);
				break;
			case 'log':
				Ti.API.log(_msg);
				break;
			case 'trace':
				Ti.API.trace(_msg);
				break;
			case 'warn':
				Ti.API.warn(_msg);
				break;
		}
	}
};
