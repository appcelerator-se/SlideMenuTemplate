
var args = arguments[0] || {};
var googleAPI = require('googleAPI');

/**
 * URL Reference for Google Geolocation API
 */
var GOOGLE_API = 'http://maps.googleapis.com/maps/api/geocode/json?address=%s&sensor=true';

/**
 * setLocation
 * 
 * Updates the Ti.Map with the annotation of the searched address
 */
function setLocation(){
	
	/**
	 * Parse out responseText of successful response
	 */
	var result = JSON.parse(this.responseText).results[0];
	
	/**
	 * Create Annotation 
	 */
	var mapAnnotation = Ti.Map.createAnnotation({
	    latitude: result.geometry.location.lat,
	    longitude: result.geometry.location.lng,
	    title: result.address_components[0].long_name + " " + result.address_components[1].long_name,
	    subtitle: result.address_components[2].long_name +"," + result.address_components[4].long_name,
	    pincolor:Ti.Map.ANNOTATION_RED,
	    animate: true
	});
	
	/**
	 * Add Annotation to the Map
	 */
	$.mapview.addAnnotation(mapAnnotation);
	
	/**
	 * Set the map location
	 */
	$.mapview.setLocation({
    	latitude:result.geometry.location.lat, 
    	longitude:result.geometry.location.lng, 
    	animate:true,
    	latitudeDelta:0.04, 
    	longitudeDelta:0.04
    });
}

/**
 * Accesses Google API for forward decoding of an address
 */
function forwardGeocoder(address){
	
	if(address){
		
		googleAPI.Geolocation.forwardGeocoder(address, setLocation, function(){alert("Error with API");});
		
		/*
		/**
		 * Format URL for forward Decoder Address Lookup
		 
		var url = String.format(GOOGLE_API, address.replace(/ /g, "+"));

		/**
		 * Create HTTPClient for REST call to Google Geolocation API
		
		var xhr = Ti.Network.createHTTPClient({
			onload: setLocation,
			onerror: function forwardGeocoderError(e){
				Ti.API.error(JSON.stringify(e));
			}
		});
		
		Ti.API.info(url);
		
		/**
		 * Open the HTTP Request, specifying GET as method
		
		xhr.open("GET", url );
		
		/**
		 * OK now Send it
		
		xhr.send();
		*/
	}
}

/**
 * TextField event handler for the return button (see the XML for TextField)
 */
function onReturn(e){
	
	/*
	Ti.Analytics.featureEvent('app.location.addressLookup');
	*/
		
	Ti.API.info(JSON.stringify(e));
	forwardGeocoder(e.value);
	
	$.addressField.blur();
}

$.myFunc = function(){ alert("Hello World");}
