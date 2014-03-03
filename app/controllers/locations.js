
var args = arguments[0] || {};
var googleAPI = require('googleAPI');

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
