[logo]:https://github.com/appcelerator-se/SE-Media/blob/master/appc-logo-sm.png?raw=true
[expanded-app]:https://github.com/appcelerator-se/SlideMenuTemplate/blob/master/ios-expanded.png?raw=true 

![][logo] Appcelerator Slide Menu App Template
======================================================
<br/>
This application template provides a jumpstart to a simple app with a sliding menu, and multiple sample views to demonstrate core concepts of the Appcelerator Cross Platform Development Environment. While the elements of this application have been flushed out pretty well, it should be considered a `sample` and not ready for production use.

Highlighted within the application we have tried to provide some basic concepts that can be expanded upon to quickly build out proof of cocepts that can be leveraged to quickly understand the benefits of the Appcelerator Mobile Application Development Platform (MADP)

![][expanded-app]
<br/>
###Key Areas of Focus in this Demo App include:

* A Custom Cross Platform Navigation Engine, based on a sliding menu UI paradigm
* Customized Views and UI based on native elements
* Device Access using Native Maps and Contacts
* Access remote data sources

##Platforms Support
<br/>
* iOS v6.1+ (iPhone & iPad)
* Android v2.3.3+ (handheld & Tablets
* MobileWeb (Considered Experimental while i fix the bugs)

# Screen By Screen

## Home
Opens a WebView and navigates to a URL

## Expenses
A sample UI that would work well for an expense reporting Application

## Briefcase
This view loads content from an existing file (app/libs/files.js) to build out the data table. Leverages the Titanium.Filesystem Object

## Location
Integrates a native Map (Titanium.Map) into a view, and leverages a 3rd Party Web Services (Google GeoCoder Module - app/lib/googleAPI.js) to lookup latitude / longitude coordinates and then places an Annotation and re-orientes the Map View.

## Profile
A sample profile UI. This view incorporates a Titanium.UI.ScrollableView to provide meta data about the user, scrolling the view shows more information.

Additionally this view demonstrates how to access the device Contacts. Clicking the "+" icon in the top right corner saves the information to the device contact list.

## Settings
A sample of how to use the modal feature on the Alloy.Globals.App.Navigator object, to create a basic settings screen.


# Application Core Object

This Application uses a simplified variant of the App Singleton method you can learn about in our open source project called [Core](https://github.com/rblalock/core). To read more about this project, I highly suggest you click on over and read about this project. Its well documented and there is a great baseline sample app you can dive into.

[https://github.com/rblalock/core](https://github.com/rblalock/core)

For our project, we are basing the core App object as part of the Alloy Singleton, making it easily accessible from any file within your project. 

## Navigation

The Navigator Object, is accessible off of the App object - Alloy.Globals.App.Navigator.

Navigator is responsible for all aspects of routing in the application (this includes managing the slideing menu). There are three main functions you should be aware of at a high level to understand how this handles navigation.

###Alloy.Globals.App.Navigator.init(_params)
This function is called at the start of your application (in our case from the index.js) when you want to initialize the Navigator object with the associated windows required to function in this sliding menu environment. These consist of:

* mainView - the reference to your Applications Main Window 
* contentView - the view that makes up the majority of the viewport, typically where you would want to load in content
* menuView - the background Menu element

The above views are required as part of the _params object to properly setup the application to work. Additionally, if you would like to init the application and immediately navigate to a particular page, you can pass in the <i>startPage</i> parameter as well with the name of the View Controller you would like to open.

###Alloy.Globals.App.Navigator.open(_controller, _options)
Opens a new controller into the associated contentView of the application. This funciton is responsible for loading in the new controller into the contentView and unloading (and releasing the memory for) the previous controller.Note, if the currentView is the same controller that is passed in, nothing will happen.

###Alloy.Globals.App.Navigator.modal(_controller, _options)
Like open, but this will actually create a modal window to pop up over the existing application. For an example of this, look at the menu.js at the Settings Button event handler.

 


