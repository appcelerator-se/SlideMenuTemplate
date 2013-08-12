function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuSectionHeader = Ti.UI.createView({
        backgroundColor: "#242a37",
        height: 25,
        width: Ti.UI.FILL,
        id: "menuSectionHeader"
    });
    $.__views.menuSectionHeader && $.addTopLevelView($.__views.menuSectionHeader);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;