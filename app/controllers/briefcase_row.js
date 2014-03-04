var m = require('alloy/moment');
var _args = arguments[0] || {};

/**
 * Update the row information based on the passed in arguments
 */
_args.icon && $.filetype.setIcon("icon-"+_args.icon);
_args.date && $.timeAgo.setText(m(_args.date, "YYYY-MM-DDTHH:mm:ss.SSS").fromNow());
if(_args.filename){
	var pre, suf;
	switch(_args.icon){
		case 'picture':
			pre="pic_";
			suf=".png";
			break;
		case 'film':
			pre="vid_";
			suf=".mp4";
			break;
		case 'music':
			pre="aud_";
			suf=".mp3";
			break;
		case 'file':
		default: 
			pre="doc_";
			suf=".pdf";
	}
	
	$.filename.text = pre+_args.filename+suf;
}
_args.author && _args.department && $.author.setText(_args.author + " in "+_args.department);


/**
 * state flag for favorite icon
 */
var favoriteStatus = 0;
/**
 * handles the click event on the favorite icon view wrapper
 */
function favoriteClickHandler(){
	
	/**
	 * Capture analytics event for favorite button click for reporting purposes
	 */
	Ti.Analytics.featureEvent('app.briefcase.favoritebtn.clicked');

	/**
	 * update the state variable for the button
	 */
	favoriteStatus = !favoriteStatus;
	
	/**
	 * set the icon variable to the proper reference based on the state
	 */
	var icon = !favoriteStatus ? 'icon-star-empty' : 'icon-star';
	$.favoriteBtn.setIcon(icon);
}

/**
 * state flag for comment icon
 */
var commentStatus = 0;
/**
 * handles the click event on the comment icon view wrapper
 */
function commentClickHandler(){
	/**
	 * Capture analytics event for button click for reporting purposes
	 */
	Ti.Analytics.featureEvent('app.briefcase.commentbtn.clicked');
	
	/**
	 * update the state variable for the button
	 */
	commentStatus = !commentStatus;
	
	/**
	 * set the icon variable to the proper reference based on the state
	 */
	var icon = !commentStatus ? 'icon-comment-alt' : 'icon-comment';
	$.commentBtn.setIcon(icon);
}
