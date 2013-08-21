var m = require('alloy/moment');
var _args = arguments[0] || {};

_args.icon && $.filetype.setIcon("icon-"+_args.icon);
_args.date && $.timeAgo.setText(m(_args.date, "YYYY-MM-DDTHH:mm:ss.SSS").fromNow());
if(_args.filename){
	var pre, suf;
	switch(_args.icon){
		case 'picture':
			pre="PIC_";
			suf=".png";
			break;
		case 'film':
			pre="VID_";
			suf=".mp4";
			break;
		case 'music':
			pre="AUD_";
			suf=".mp3";
			break;
		case 'file':
		default: 
			pre="DOC_";
			suf=".pdf";
	}
	
	$.filename.text = pre+_args.filename+suf;
}
