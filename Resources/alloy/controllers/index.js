function Controller() {
    function showhidemenu() {
        App.Navigator.showhidemenu();
    }
    function testclick(e) {
        alert(e.source.id + " clicked");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        modal: false,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#2c323f",
        left: 0,
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
    showhidemenu ? $.__views.menu.addEventListener("click", showhidemenu) : __defers["$.__views.menu!click!showhidemenu"] = true;
    $.__views.__alloyId3 = Alloy.createController("menu", {
        id: "__alloyId3",
        __parentSymbol: $.__views.menu
    });
    $.__views.__alloyId3.setParent($.__views.menu);
    $.__views.page = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#d6d6d6",
        left: 0,
        id: "page"
    });
    $.__views.index.add($.__views.page);
    $.__views.navigationBar = Ti.UI.createView({
        backgroundImage: "/images/iconBarBG.png",
        width: Ti.UI.FILL,
        height: 54,
        border: 1,
        borderColor: "maroon",
        id: "navigationBar"
    });
    $.__views.page.add($.__views.navigationBar);
    $.__views.menubtn = Ti.UI.createView({
        left: 0,
        width: 55,
        height: 54,
        id: "menubtn"
    });
    $.__views.navigationBar.add($.__views.menubtn);
    showhidemenu ? $.__views.menubtn.addEventListener("click", showhidemenu) : __defers["$.__views.menubtn!click!showhidemenu"] = true;
    $.__views.__alloyId4 = Alloy.createWidget("net.hoyohoyo.iconiclabel", "widget", {
        font: {
            fontFamily: "FontAwesome",
            fontSize: 28
        },
        color: "#fff",
        icon: "icon-reorder",
        touchEnabled: "false",
        id: "__alloyId4",
        __parentSymbol: $.__views.menubtn
    });
    $.__views.__alloyId4.setParent($.__views.menubtn);
    $.__views.topActions = Ti.UI.createView({
        width: "150dp",
        height: "50dp",
        layout: "horizontal",
        id: "topActions"
    });
    $.__views.navigationBar.add($.__views.topActions);
    $.__views.friendsBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        height: "50dp",
        width: "50dp",
        image: "/images/friendsbtn.png",
        id: "friendsBtn"
    });
    $.__views.topActions.add($.__views.friendsBtn);
    testclick ? $.__views.friendsBtn.addEventListener("click", testclick) : __defers["$.__views.friendsBtn!click!testclick"] = true;
    $.__views.messagesBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        height: "50dp",
        width: "50dp",
        image: "/images/messagesbtn.png",
        id: "messagesBtn"
    });
    $.__views.topActions.add($.__views.messagesBtn);
    testclick ? $.__views.messagesBtn.addEventListener("click", testclick) : __defers["$.__views.messagesBtn!click!testclick"] = true;
    $.__views.notificationsBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        height: "50dp",
        width: "50dp",
        image: "/images/notificationsbtn.png",
        id: "notificationsBtn"
    });
    $.__views.topActions.add($.__views.notificationsBtn);
    testclick ? $.__views.notificationsBtn.addEventListener("click", testclick) : __defers["$.__views.notificationsBtn!click!testclick"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: 1,
        id: "__alloyId5"
    });
    $.__views.page.add($.__views.__alloyId5);
    $.__views.mainWindow = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "mainWindow"
    });
    $.__views.page.add($.__views.mainWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var App = Alloy.Globals.App;
    App.Navigator.init({
        mainView: $.page,
        menuView: $.menu,
        contentView: $.mainWindow
    });
    App.Navigator.open("home");
    $.index.open();
    __defers["$.__views.menu!click!showhidemenu"] && $.__views.menu.addEventListener("click", showhidemenu);
    __defers["$.__views.menubtn!click!showhidemenu"] && $.__views.menubtn.addEventListener("click", showhidemenu);
    __defers["$.__views.friendsBtn!click!testclick"] && $.__views.friendsBtn.addEventListener("click", testclick);
    __defers["$.__views.messagesBtn!click!testclick"] && $.__views.messagesBtn.addEventListener("click", testclick);
    __defers["$.__views.notificationsBtn!click!testclick"] && $.__views.notificationsBtn.addEventListener("click", testclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;