function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.photos = Ti.UI.createView({
        backgroundColor: "white",
        id: "photos"
    });
    $.__views.photos && $.addTopLevelView($.__views.photos);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        left: "10dp",
        right: "10dp",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        color: "#fff",
        text: "Photos",
        id: "__alloyId36"
    });
    $.__views.photos.add($.__views.__alloyId36);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;