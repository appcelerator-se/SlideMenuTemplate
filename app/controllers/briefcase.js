

var data = require('files').data;
var rows =[];

for(var i=0; i<25;i++){
	Ti.API.info(Math.floor(Math.random(99)*100));
	
	var rowData = data[Math.floor(Math.random(99)*100)];
	Ti.API.info(rowData); 
	
	var row = Alloy.createController('briefcase_row', rowData).getView();
	row && rows.push(row);
	Ti.API.info('rowcount = '+rows.length);
}

$.tableView.setData(rows);
