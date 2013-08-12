var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.App = {
    Settings: {
        menuWidth: "265dp"
    },
    Navigator: {
        menuView: null,
        mainView: null,
        contentView: null,
        currentController: null,
        menuVisible: false,
        init: function(_params) {
            this.menuView = _params.menuView;
            this.mainView = _params.mainView;
            this.contentView = _params.contentView;
            Ti.API.debug("Navigator.init - complete");
        },
        open: function(_controller, _options) {
            if (_controller && this.contentView) {
                if (this.currentController && _controller !== this.currentController.getView().id || !this.currentController) {
                    this.currentController && Ti.Analytics.navEvent(this.currentController.getView().id, _controller) || Ti.Analytics.featureEvent("new_session", null);
                    if (this.currentController) {
                        this.contentView.remove(this.currentController.getView());
                        this.currentController = null;
                        Ti.API.info("Old View Collected!");
                    }
                    this.currentController = Alloy.createController(_controller, _options);
                    this.contentView.add(this.currentController.getView());
                }
            } else Ti.API.error("Either a controller was not specified or the Navigator object has not been properly initiallized.");
            Ti.API.debug("Navigator.open - complete");
        },
        modal: function(_controller, _options) {
            if (_controller) {
                var modalWin = Ti.UI.createWindow();
                Alloy.createController(_controller, _options);
                modalWin.add(modalWin.getView());
                modalWin.open({
                    modal: true
                });
            } else Ti.API.error("Mandatory parameter '_controller' not specified");
        },
        showhidemenu: function() {
            this.mainView.width = Ti.Platform.displayCaps.platformWidth;
            var l = this.menuVisible ? 0 : Alloy.Globals.App.Settings.menuWidth;
            this.mainView.animate({
                left: l,
                duration: 100
            });
            this.menuVisible = !this.menuVisible;
        }
    },
    init: function() {
        Ti.Network.addEventListener("change", _.bind(this.networkObserverUpdate, this));
        Ti.App.addEventListener("pause", _.bind(this.exit, this));
        Ti.App.addEventListener("close", _.bind(this.exit, this));
        Ti.App.addEventListener("resume", _.bind(this.resume, this));
        Ti.Gesture.addEventListener("orientationchange", _.bind(this.orientationObserverUpdate, this));
        this.registerPush();
    },
    registerPush: function() {
        this.log("debug", "APP.registerPush");
    },
    networkObserverUpdate: function() {
        this.log("debug", "APP.networkObserverUpdate");
    },
    currentOrientation: Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT ? "landscape" : "portrait",
    orientationObserverUpdate: function(e) {
        this.log("debug", "APP.orientationObserverUpdate");
        var type = e.orientation == Ti.UI.LANDSCAPE_LEFT || e.orientation == Ti.UI.LANDSCAPE_RIGHT ? "landscape" : "portrait";
        if (this.currentOrientation != type) {
            if (e.orientation == Ti.UI.FACE_UP || e.orientation == Ti.UI.FACE_DOWN || e.orientation == Ti.UI.UNKNOWN) return;
            this.currentOrientation = type;
            this.Navigator.currentController && this.Navigation.currentController.orientationUpdate && this.Navigation.currentController.orientationUpdate(type);
            Ti.App.fireEvent("updateOrientation", {
                orientation: type
            });
        }
    },
    exit: function() {
        this.log("debug", "APP.exit");
    },
    resume: function() {
        this.log("debug", "APP.resume");
    },
    pause: function() {
        this.log("debug", "APP.pause");
    },
    log: function(_serverity, _msg) {
        switch (_serverity.toLowerCase()) {
          case "debug":
            Ti.API.info(_msg);
            break;

          case "error":
            Ti.API.error(_msg);
            break;

          case "info":
            Ti.API.info(_msg);
            break;

          case "log":
            Ti.API.log(_msg);
            break;

          case "trace":
            Ti.API.trace(_msg);
            break;

          case "warn":
            Ti.API.warn(_msg);
        }
    }
};

Alloy.createController("index");