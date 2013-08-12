function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.briefcase = Ti.UI.createView({
        id: "briefcase"
    });
    $.__views.briefcase && $.addTopLevelView($.__views.briefcase);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#fff",
        text: "Briefcase",
        id: "__alloyId0"
    });
    $.__views.briefcase.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;