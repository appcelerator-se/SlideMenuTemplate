function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.menu = Ti.UI.createView({
        backgroundColor: "transparent",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.btnProfile = Ti.UI.createView({
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: 54,
        id: "btnProfile",
        page: "profile"
    });
    $.__views.menu.add($.__views.btnProfile);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "#222",
        opacity: .25,
        touchEnabled: "false",
        id: "__alloyId11"
    });
    $.__views.btnProfile.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 28
        },
        color: "#fff",
        icon: "icon-user",
        touchEnabled: "false",
        id: "__alloyId12",
        __parentSymbol: $.__views.btnProfile
    });
    $.__views.__alloyId12.setParent($.__views.btnProfile);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 28
        },
        color: "#fff",
        left: 50,
        text: "My Profile",
        touchEnabled: "false",
        id: "__alloyId13"
    });
    $.__views.btnProfile.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewSection({
        headerView: "menuSectionHeader",
        id: "__alloyId14"
    });
    var __alloyId15 = [];
    __alloyId15.push($.__views.__alloyId14);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: 45,
        width: Ti.UI.FILL,
        className: "menuRow",
        page: "home",
        id: "__alloyId16"
    });
    __alloyId15.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 24
        },
        color: "#fff",
        icon: "icon-home",
        id: "__alloyId17",
        __parentSymbol: $.__views.__alloyId16
    });
    $.__views.__alloyId17.setParent($.__views.__alloyId16);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 24
        },
        color: "#fff",
        left: 50,
        text: "Home",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        opacity: .25,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: 45,
        width: Ti.UI.FILL,
        className: "menuRow",
        page: "briefcase",
        id: "__alloyId20"
    });
    __alloyId15.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 24
        },
        color: "#fff",
        icon: "icon-briefcase",
        id: "__alloyId21",
        __parentSymbol: $.__views.__alloyId20
    });
    $.__views.__alloyId21.setParent($.__views.__alloyId20);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 24
        },
        color: "#fff",
        left: 50,
        text: "Briefcase",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        opacity: .25,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: 45,
        width: Ti.UI.FILL,
        className: "menuRow",
        page: "locations",
        id: "__alloyId24"
    });
    __alloyId15.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 24
        },
        color: "#fff",
        icon: "icon-map-marker",
        id: "__alloyId25",
        __parentSymbol: $.__views.__alloyId24
    });
    $.__views.__alloyId25.setParent($.__views.__alloyId24);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 24
        },
        color: "#fff",
        left: 50,
        text: "Locations",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        opacity: .25,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: 45,
        width: Ti.UI.FILL,
        className: "menuRow",
        page: "photos",
        id: "__alloyId28"
    });
    __alloyId15.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 24
        },
        color: "#fff",
        icon: "icon-picture",
        id: "__alloyId29",
        __parentSymbol: $.__views.__alloyId28
    });
    $.__views.__alloyId29.setParent($.__views.__alloyId28);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 24
        },
        color: "#fff",
        left: 50,
        text: "Photos",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        opacity: .25,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewSection({
        id: "__alloyId32"
    });
    __alloyId15.push($.__views.__alloyId32);
    $.__views.tableView = Ti.UI.createTableView({
        backgroundColor: "transparent",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        separatorColor: "#242a37",
        layout: "vertical",
        data: __alloyId15,
        id: "tableView"
    });
    $.__views.menu.add($.__views.tableView);
    $.__views.btnSettings = Ti.UI.createView({
        id: "btnSettings",
        page: "settings"
    });
    $.__views.menu.add($.__views.btnSettings);
    $.__views.__alloyId33 = Ti.UI.createView({
        touchEnabled: "false",
        id: "__alloyId33"
    });
    $.__views.btnSettings.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        left: 10,
        width: 30,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 28
        },
        color: "#fff",
        icon: "icon-cog",
        touchEnabled: "false",
        id: "__alloyId34",
        __parentSymbol: $.__views.btnSettings
    });
    $.__views.__alloyId34.setParent($.__views.btnSettings);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: 28
        },
        color: "#fff",
        left: 50,
        text: "Settings",
        touchEnabled: "false",
        id: "__alloyId35"
    });
    $.__views.btnSettings.add($.__views.__alloyId35);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var App = Alloy.Globals.App;
    $.tableView.addEventListener("click", function(e) {
        Ti.API.info(JSON.stringify(e));
        e.rowData && e.rowData.page && App.Navigator.open(e.rowData.page);
    });
    $.btnProfile.addEventListener("click", function(e) {
        Ti.API.info(JSON.stringify(e));
        App.Navigator.open(e.source.page);
    });
    $.btnSettings.addEventListener("click", function(e) {
        Ti.API.info(JSON.stringify(e));
        App.Navigator.open(e.source.page);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;