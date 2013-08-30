
var statusBarVariance = 0;
var dpToPxConversion = OS_ANDROID ? Ti.Platform.displayCaps.dpi/160 : 1;

if(OS_IOS && !Ti.UI.iPhone.statusBarHidden){
	statusBarVariance = Ti.Platform.displayCaps.platformHeight <=480 ? 2 : 1;
}
else if(OS_ANDROID){
	statusBarVariance = dpToPxConversion;
}

var rowHeight = Math.floor(Ti.Platform.displayCaps.platformHeight / (10*dpToPxConversion)) - statusBarVariance;
var colWidth = Math.floor(Ti.Platform.displayCaps.platformWidth / (10*dpToPxConversion));


module.exports = {

	/**
	 * Vertical Grid
	 */
	rowspan1: rowHeight,
	rowspan2: rowHeight*2,
	rowspan3: rowHeight*3,
	rowspan4: rowHeight*4,
	rowspan5: rowHeight*5,
	rowspan6: rowHeight*6,
	rowspan7: rowHeight*7,
	rowspan8: rowHeight*8,
	rowspan9: rowHeight*9,
	rowspan10: rowHeight*10,
	
	/**
	 * Horizontal Grid
	 */
	colspan1: colWidth,
	colspan2: colWidth*2,
	colspan3: colWidth*3,
	colspan4: colWidth*4,
	colspan5: colWidth*5,
	colspan6: colWidth*6,
	colspan7: colWidth*7,
	colspan8: colWidth*8,
	colspan9: colWidth*9,
	colspan10: colWidth*10,
};