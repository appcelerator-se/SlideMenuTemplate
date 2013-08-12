function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.locations = Ti.UI.createView({
        layout: "vertical",
        id: "locations"
    });
    $.__views.locations && $.addTopLevelView($.__views.locations);
    $.__views.menuBar = Ti.UI.createView({
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "50dp",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.locations.add($.__views.menuBar);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId6"
    });
    $.__views.menuBar.add($.__views.__alloyId6);
    $.__views.statusBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        width: "73dp",
        height: "19dp",
        image: "/images/statusbtn.png",
        id: "statusBtn"
    });
    $.__views.__alloyId6.add($.__views.statusBtn);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId7"
    });
    $.__views.menuBar.add($.__views.__alloyId7);
    $.__views.photoBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        width: "73dp",
        height: "19dp",
        image: "/images/photobtn.png",
        id: "photoBtn"
    });
    $.__views.__alloyId7.add($.__views.photoBtn);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId8"
    });
    $.__views.menuBar.add($.__views.__alloyId8);
    $.__views.checkinBtn = Ti.UI.createImageView({
        preventDefaultImage: true,
        width: "73dp",
        height: "19dp",
        image: "/images/checkinbtn.png",
        id: "checkinBtn"
    });
    $.__views.__alloyId8.add($.__views.checkinBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;