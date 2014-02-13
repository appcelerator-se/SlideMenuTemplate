var _args = arguments[0] || {};

$.profilePicture.image = _args.image || '/images/profile-pic.jpg';
$.shareContactBtn.icon.addEventListener('click', shareContact);
$.addContactBtn.icon.addEventListener('click', addContact);

if(OS_IOS){
	$.mapview.addEventListener('complete', mapAdjustRegion);
}
var mapAnnotation = Ti.Map.createAnnotation({
    latitude:30.631256,
    longitude:-97.675422,
    title:"My Office",
    subtitle:'Georgetown, TX',
    pincolor:Ti.Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});
$.mapview.addAnnotation(mapAnnotation);


function mapAdjustRegion(e){
	$.mapview.region = {
		latitude: 30.631256,
		longitude: -97.675422,
		latitudeDelta:0.01,
		longitudeDelta:0.01
	};
	
	
}

function addContact(e) {
	
	Ti.API.info('Saving contact...');
	
	var performAddressBookFunction = function(){
		var workAddress1 = {
		  'CountryCode': 'us',
		  'Street':  '440 N. Bernardo Avenue',
		  'City': 'Mountain View',
		  'State': 'California',
		  'Country': 'United States',
		  'ZIP': '94043'
		};
		
		Ti.Contacts.createPerson({
			firstName : 'Kelly',
			lastName : 'Smith',
			organization: 'Appcelerator, Inc.',
			image: $.profilePicture.toBlob(),
			email: {
				work:['kelly.smith@appcelerator.com']
			}, 
			phone: {
				mobile:['512-555-1212']
			},
			address : {
				work : [workAddress1]
			},
			instantMessage:{
				home:[
					{
						service: 'Skype',
						username: 'kelly.smith'
					},
				]
			}
		});
		alert('Contact saved');
		
		/*
		Ti.Analytics.featureEvent(app.profile.saveContact)
		 */
	};
	
	/*
	 * IOS requires permission grantgs on iOS6 and above
	 */
	if(OS_IOS){
		
		var addressBookDisallowed = function(){
			Ti.API.error("ERROR STORING CONTACT - PERMISSION DENIED");
		};
		
		if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
		    performAddressBookFunction();
		} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
		    Ti.Contacts.requestAuthorization(function(e){
		        if (e.success) {
		            performAddressBookFunction();
		        } else {
		            addressBookDisallowed();
		        }
		    });
		} else {
		    addressBookDisallowed();
		}
	}
	else if(OS_ANDROID){ // ANDROID HAS PERMISSIONS IN THE MANIFEST
		performAddressBookFunction();
	}
};

function shareContact() {
	// TODO code to share contacts via email
	alert("share contact");
};

