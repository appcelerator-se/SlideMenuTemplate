/**
 * Module example for accessing 3rd party APIs, in this case Google API
 *
 * @class Geolocation
 * @module
 */

/**
 * URL Reference for Google Geolocation API
 */
var GOOGLE_API = 'http://maps.googleapis.com/maps/api/geocode/json?address=%s&sensor=true';

exports.Geolocation = {
	
	forwardGeocoder: function(address, successCallback, errorCallback){

		/**
		 * Format URL for forward Decoder Address Lookup
		 */
		var url = String.format(GOOGLE_API, address.replace(/ /g, "+"));
		
		/**
		 * Create HTTPClient for REST call to Google Geolocation API
		 */
		var xhr = Ti.Network.createHTTPClient({
			onload: successCallback,
			onerror: function forwardGeocoderError(e){
				Ti.API.error(JSON.stringify(e));
				errorCallback && errorCallback();
			}
		});
		
		Ti.API.info(url);
		
		/**
		 * Open the HTTP Request, specifying GET as method
		 */
		xhr.open("GET", url );
		
		/**
		 * OK now Send it
		 */
		xhr.send();
	},
	
};







