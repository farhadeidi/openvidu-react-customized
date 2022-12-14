"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _openviduBrowser = require("openvidu-browser");
var _StreamComponent = _interopRequireDefault(require("./stream/StreamComponent"));
var _DialogExtension = _interopRequireDefault(require("./dialog-extension/DialogExtension"));
var _ChatComponent = _interopRequireDefault(require("./chat/ChatComponent"));
var _openviduLayout = _interopRequireDefault(require("../layout/openvidu-layout"));
var _userModel = _interopRequireDefault(require("../models/user-model"));
var _ToolbarComponent = _interopRequireDefault(require("./toolbar/ToolbarComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var localUser = new _userModel["default"]();
var VideoRoomComponent = /*#__PURE__*/function (_Component) {
  _inherits(VideoRoomComponent, _Component);
  var _super = _createSuper(VideoRoomComponent);
  function VideoRoomComponent(props) {
    var _this;
    _classCallCheck(this, VideoRoomComponent);
    _this = _super.call(this, props);
    _this.OPENVIDU_SERVER_URL = _this.props.openviduServerUrl ? _this.props.openviduServerUrl : "https://" + window.location.hostname + ":4443";
    _this.OPENVIDU_SERVER_SECRET = _this.props.openviduSecret ? _this.props.openviduSecret : "MY_SECRET";
    _this.hasBeenUpdated = false;
    _this.layout = new _openviduLayout["default"]();
    var sessionName = _this.props.sessionName ? _this.props.sessionName : "SessionA";
    var userName = _this.props.user ? _this.props.user : "OpenVidu_User" + Math.floor(Math.random() * 100);
    _this.remotes = [];
    _this.localUserAccessAllowed = false;
    _this.state = {
      mySessionId: sessionName,
      myUserName: userName,
      session: undefined,
      localUser: undefined,
      subscribers: [],
      chatDisplay: "none",
      currentVideoDevice: undefined
    };
    _this.joinSession = _this.joinSession.bind(_assertThisInitialized(_this));
    _this.leaveSession = _this.leaveSession.bind(_assertThisInitialized(_this));
    _this.onbeforeunload = _this.onbeforeunload.bind(_assertThisInitialized(_this));
    _this.updateLayout = _this.updateLayout.bind(_assertThisInitialized(_this));
    _this.camStatusChanged = _this.camStatusChanged.bind(_assertThisInitialized(_this));
    _this.micStatusChanged = _this.micStatusChanged.bind(_assertThisInitialized(_this));
    _this.nicknameChanged = _this.nicknameChanged.bind(_assertThisInitialized(_this));
    _this.toggleFullscreen = _this.toggleFullscreen.bind(_assertThisInitialized(_this));
    _this.switchCamera = _this.switchCamera.bind(_assertThisInitialized(_this));
    _this.screenShare = _this.screenShare.bind(_assertThisInitialized(_this));
    _this.stopScreenShare = _this.stopScreenShare.bind(_assertThisInitialized(_this));
    _this.closeDialogExtension = _this.closeDialogExtension.bind(_assertThisInitialized(_this));
    _this.toggleChat = _this.toggleChat.bind(_assertThisInitialized(_this));
    _this.checkNotification = _this.checkNotification.bind(_assertThisInitialized(_this));
    _this.checkSize = _this.checkSize.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VideoRoomComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var openViduLayoutOptions = {
        maxRatio: 3 / 2,
        // The narrowest ratio that will be used (default 2x3)
        minRatio: 9 / 16,
        // The widest ratio that will be used (default 16x9)
        fixedRatio: false,
        // If this is true then the aspect ratio of the video is maintained and minRatio and maxRatio are ignored (default false)
        bigClass: "OV_big",
        // The class to add to elements that should be sized bigger
        bigPercentage: 0.8,
        // The maximum percentage of space the big ones should take up
        bigFixedRatio: false,
        // fixedRatio for the big ones
        bigMaxRatio: 3 / 2,
        // The narrowest ratio to use for the big elements (default 2x3)
        bigMinRatio: 9 / 16,
        // The widest ratio to use for the big elements (default 16x9)
        bigFirst: true,
        // Whether to place the big one in the top left (true) or bottom right
        animate: true // Whether you want to animate the transitions
      };

      this.layout.initLayoutContainer(document.getElementById("layout"), openViduLayoutOptions);
      window.addEventListener("beforeunload", this.onbeforeunload);
      window.addEventListener("resize", this.updateLayout);
      window.addEventListener("resize", this.checkSize);
      this.joinSession();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onbeforeunload);
      window.removeEventListener("resize", this.updateLayout);
      window.removeEventListener("resize", this.checkSize);
      this.leaveSession();
    }
  }, {
    key: "onbeforeunload",
    value: function onbeforeunload(event) {
      this.leaveSession();
    }
  }, {
    key: "joinSession",
    value: function joinSession() {
      var _this2 = this;
      this.OV = new _openviduBrowser.OpenVidu();
      this.setState({
        session: this.OV.initSession()
      }, function () {
        _this2.subscribeToStreamCreated();
        _this2.connectToSession();
      });
    }
  }, {
    key: "connectToSession",
    value: function connectToSession() {
      var _this3 = this;
      if (this.props.token !== undefined) {
        console.log("token received: ", this.props.token);
        this.connect(this.props.token);
      } else {
        this.getToken().then(function (token) {
          console.log(token);
          _this3.connect(token);
        })["catch"](function (error) {
          if (_this3.props.error) {
            _this3.props.error({
              error: error.error,
              messgae: error.message,
              code: error.code,
              status: error.status
            });
          }
          console.log("There was an error getting the token:", error.code, error.message);
          alert("There was an error getting the token:", error.message);
        });
      }
    }
  }, {
    key: "connect",
    value: function connect(token) {
      var _this4 = this;
      this.state.session.connect(token, {
        clientData: this.state.myUserName
      }).then(function () {
        _this4.connectWebCam();
      })["catch"](function (error) {
        if (_this4.props.error) {
          _this4.props.error({
            error: error.error,
            messgae: error.message,
            code: error.code,
            status: error.status
          });
        }
        alert("There was an error connecting to the session:", error.message);
        console.log("There was an error connecting to the session:", error.code, error.message);
      });
    }
  }, {
    key: "connectWebCam",
    value: function () {
      var _connectWebCam = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this5 = this;
        var devices, videoDevices, publisher;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.OV.getDevices();
              case 2:
                devices = _context.sent;
                videoDevices = devices.filter(function (device) {
                  return device.kind === "videoinput";
                });
                publisher = this.OV.initPublisher(undefined, {
                  audioSource: undefined,
                  videoSource: videoDevices[0].deviceId,
                  publishAudio: localUser.isAudioActive(),
                  publishVideo: localUser.isVideoActive(),
                  resolution: "640x480",
                  frameRate: 30,
                  insertMode: "APPEND"
                });
                if (this.state.session.capabilities.publish) {
                  publisher.on("accessAllowed", function () {
                    _this5.state.session.publish(publisher).then(function () {
                      _this5.updateSubscribers();
                      _this5.localUserAccessAllowed = true;
                      if (_this5.props.joinSession) {
                        _this5.props.joinSession();
                      }
                    });
                  });
                }
                localUser.setNickname(this.state.myUserName);
                localUser.setConnectionId(this.state.session.connection.connectionId);
                localUser.setScreenShareActive(false);
                localUser.setStreamManager(publisher);
                this.subscribeToUserChanged();
                this.subscribeToStreamDestroyed();
                this.sendSignalUserChanged({
                  isScreenShareActive: localUser.isScreenShareActive()
                });
                this.setState({
                  currentVideoDevice: videoDevices[0],
                  localUser: localUser
                }, function () {
                  _this5.state.localUser.getStreamManager().on("streamPlaying", function (e) {
                    _this5.updateLayout();
                    publisher.videos[0].video.parentElement.classList.remove("custom-class");
                  });
                });
              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function connectWebCam() {
        return _connectWebCam.apply(this, arguments);
      }
      return connectWebCam;
    }()
  }, {
    key: "updateSubscribers",
    value: function updateSubscribers() {
      var _this6 = this;
      var subscribers = this.remotes;
      this.setState({
        subscribers: subscribers
      }, function () {
        if (_this6.state.localUser) {
          _this6.sendSignalUserChanged({
            isAudioActive: _this6.state.localUser.isAudioActive(),
            isVideoActive: _this6.state.localUser.isVideoActive(),
            nickname: _this6.state.localUser.getNickname(),
            isScreenShareActive: _this6.state.localUser.isScreenShareActive()
          });
        }
        _this6.updateLayout();
      });
    }
  }, {
    key: "leaveSession",
    value: function leaveSession() {
      var mySession = this.state.session;
      if (mySession) {
        mySession.disconnect();
      }

      // Empty all properties...
      this.OV = null;
      this.setState({
        session: undefined,
        subscribers: [],
        mySessionId: "SessionA",
        myUserName: "OpenVidu_User" + Math.floor(Math.random() * 100),
        localUser: undefined
      });
      if (this.props.leaveSession) {
        this.props.leaveSession();
      }
    }
  }, {
    key: "camStatusChanged",
    value: function camStatusChanged() {
      localUser.setVideoActive(!localUser.isVideoActive());
      localUser.getStreamManager().publishVideo(localUser.isVideoActive());
      this.sendSignalUserChanged({
        isVideoActive: localUser.isVideoActive()
      });
      this.setState({
        localUser: localUser
      });
    }
  }, {
    key: "micStatusChanged",
    value: function micStatusChanged() {
      localUser.setAudioActive(!localUser.isAudioActive());
      localUser.getStreamManager().publishAudio(localUser.isAudioActive());
      this.sendSignalUserChanged({
        isAudioActive: localUser.isAudioActive()
      });
      this.setState({
        localUser: localUser
      });
    }
  }, {
    key: "nicknameChanged",
    value: function nicknameChanged(nickname) {
      var localUser = this.state.localUser;
      localUser.setNickname(nickname);
      this.setState({
        localUser: localUser
      });
      this.sendSignalUserChanged({
        nickname: this.state.localUser.getNickname()
      });
    }
  }, {
    key: "deleteSubscriber",
    value: function deleteSubscriber(stream) {
      var remoteUsers = this.state.subscribers;
      var userStream = remoteUsers.filter(function (user) {
        return user.getStreamManager().stream === stream;
      })[0];
      var index = remoteUsers.indexOf(userStream, 0);
      if (index > -1) {
        remoteUsers.splice(index, 1);
        this.setState({
          subscribers: remoteUsers
        });
      }
    }
  }, {
    key: "subscribeToStreamCreated",
    value: function subscribeToStreamCreated() {
      var _this7 = this;
      this.state.session.on("streamCreated", function (event) {
        var subscriber = _this7.state.session.subscribe(event.stream, undefined);
        // var subscribers = this.state.subscribers;
        subscriber.on("streamPlaying", function (e) {
          _this7.checkSomeoneShareScreen();
          subscriber.videos[0].video.parentElement.classList.remove("custom-class");
        });
        var newUser = new _userModel["default"]();
        newUser.setStreamManager(subscriber);
        newUser.setConnectionId(event.stream.connection.connectionId);
        newUser.setType("remote");
        var nickname = event.stream.connection.data.split("%")[0];
        newUser.setNickname(JSON.parse(nickname).clientData);
        _this7.remotes.push(newUser);
        if (_this7.localUserAccessAllowed) {
          _this7.updateSubscribers();
        }
      });
    }
  }, {
    key: "subscribeToStreamDestroyed",
    value: function subscribeToStreamDestroyed() {
      var _this8 = this;
      // On every Stream destroyed...
      this.state.session.on("streamDestroyed", function (event) {
        // Remove the stream from 'subscribers' array
        _this8.deleteSubscriber(event.stream);
        setTimeout(function () {
          _this8.checkSomeoneShareScreen();
        }, 20);
        event.preventDefault();
        _this8.updateLayout();
      });
    }
  }, {
    key: "subscribeToUserChanged",
    value: function subscribeToUserChanged() {
      var _this9 = this;
      this.state.session.on("signal:userChanged", function (event) {
        var remoteUsers = _this9.state.subscribers;
        remoteUsers.forEach(function (user) {
          if (user.getConnectionId() === event.from.connectionId) {
            var data = JSON.parse(event.data);
            console.log("EVENTO REMOTE: ", event.data);
            if (data.isAudioActive !== undefined) {
              user.setAudioActive(data.isAudioActive);
            }
            if (data.isVideoActive !== undefined) {
              user.setVideoActive(data.isVideoActive);
            }
            if (data.nickname !== undefined) {
              user.setNickname(data.nickname);
            }
            if (data.isScreenShareActive !== undefined) {
              user.setScreenShareActive(data.isScreenShareActive);
            }
          }
        });
        _this9.setState({
          subscribers: remoteUsers
        }, function () {
          return _this9.checkSomeoneShareScreen();
        });
      });
    }
  }, {
    key: "updateLayout",
    value: function updateLayout() {
      var _this10 = this;
      setTimeout(function () {
        _this10.layout.updateLayout();
      }, 20);
    }
  }, {
    key: "sendSignalUserChanged",
    value: function sendSignalUserChanged(data) {
      var signalOptions = {
        data: JSON.stringify(data),
        type: "userChanged"
      };
      this.state.session.signal(signalOptions);
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      var document = window.document;
      var fs = document.getElementById("container");
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (fs.requestFullscreen) {
          fs.requestFullscreen();
        } else if (fs.msRequestFullscreen) {
          fs.msRequestFullscreen();
        } else if (fs.mozRequestFullScreen) {
          fs.mozRequestFullScreen();
        } else if (fs.webkitRequestFullscreen) {
          fs.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }
  }, {
    key: "switchCamera",
    value: function () {
      var _switchCamera = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this11 = this;
        var devices, videoDevices, newVideoDevice, newPublisher;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.OV.getDevices();
              case 3:
                devices = _context2.sent;
                videoDevices = devices.filter(function (device) {
                  return device.kind === "videoinput";
                });
                if (!(videoDevices && videoDevices.length > 1)) {
                  _context2.next = 15;
                  break;
                }
                newVideoDevice = videoDevices.filter(function (device) {
                  return device.deviceId !== _this11.state.currentVideoDevice.deviceId;
                });
                if (!(newVideoDevice.length > 0)) {
                  _context2.next = 15;
                  break;
                }
                // Creating a new publisher with specific videoSource
                // In mobile devices the default and first camera is the front one
                newPublisher = this.OV.initPublisher(undefined, {
                  audioSource: undefined,
                  videoSource: newVideoDevice[0].deviceId,
                  publishAudio: localUser.isAudioActive(),
                  publishVideo: localUser.isVideoActive(),
                  mirror: true
                }); //newPublisher.once("accessAllowed", () => {
                _context2.next = 11;
                return this.state.session.unpublish(this.state.localUser.getStreamManager());
              case 11:
                _context2.next = 13;
                return this.state.session.publish(newPublisher);
              case 13:
                this.state.localUser.setStreamManager(newPublisher);
                this.setState({
                  currentVideoDevice: newVideoDevice,
                  localUser: localUser
                });
              case 15:
                _context2.next = 20;
                break;
              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 17]]);
      }));
      function switchCamera() {
        return _switchCamera.apply(this, arguments);
      }
      return switchCamera;
    }()
  }, {
    key: "screenShare",
    value: function screenShare() {
      var _this12 = this;
      var videoSource = navigator.userAgent.indexOf("Firefox") !== -1 ? "window" : "screen";
      var publisher = this.OV.initPublisher(undefined, {
        videoSource: videoSource,
        publishAudio: localUser.isAudioActive(),
        publishVideo: localUser.isVideoActive(),
        mirror: false
      }, function (error) {
        if (error && error.name === "SCREEN_EXTENSION_NOT_INSTALLED") {
          _this12.setState({
            showExtensionDialog: true
          });
        } else if (error && error.name === "SCREEN_SHARING_NOT_SUPPORTED") {
          alert("Your browser does not support screen sharing");
        } else if (error && error.name === "SCREEN_EXTENSION_DISABLED") {
          alert("You need to enable screen sharing extension");
        } else if (error && error.name === "SCREEN_CAPTURE_DENIED") {
          alert("You need to choose a window or application to share");
        }
      });
      publisher.once("accessAllowed", function () {
        _this12.state.session.unpublish(localUser.getStreamManager());
        localUser.setStreamManager(publisher);
        _this12.state.session.publish(localUser.getStreamManager()).then(function () {
          localUser.setScreenShareActive(true);
          _this12.setState({
            localUser: localUser
          }, function () {
            _this12.sendSignalUserChanged({
              isScreenShareActive: localUser.isScreenShareActive()
            });
          });
        });
      });
      publisher.on("streamPlaying", function () {
        _this12.updateLayout();
        publisher.videos[0].video.parentElement.classList.remove("custom-class");
      });
    }
  }, {
    key: "closeDialogExtension",
    value: function closeDialogExtension() {
      this.setState({
        showExtensionDialog: false
      });
    }
  }, {
    key: "stopScreenShare",
    value: function stopScreenShare() {
      this.state.session.unpublish(localUser.getStreamManager());
      this.connectWebCam();
    }
  }, {
    key: "checkSomeoneShareScreen",
    value: function checkSomeoneShareScreen() {
      var isScreenShared;
      // return true if at least one passes the test
      isScreenShared = this.state.subscribers.some(function (user) {
        return user.isScreenShareActive();
      }) || localUser.isScreenShareActive();
      var openviduLayoutOptions = {
        maxRatio: 3 / 2,
        minRatio: 9 / 16,
        fixedRatio: isScreenShared,
        bigClass: "OV_big",
        bigPercentage: 0.8,
        bigFixedRatio: false,
        bigMaxRatio: 3 / 2,
        bigMinRatio: 9 / 16,
        bigFirst: true,
        animate: true
      };
      this.layout.setLayoutOptions(openviduLayoutOptions);
      this.updateLayout();
    }
  }, {
    key: "toggleChat",
    value: function toggleChat(property) {
      var display = property;
      if (display === undefined) {
        display = this.state.chatDisplay === "none" ? "block" : "none";
      }
      if (display === "block") {
        this.setState({
          chatDisplay: display,
          messageReceived: false
        });
      } else {
        console.log("chat", display);
        this.setState({
          chatDisplay: display
        });
      }
      this.updateLayout();
    }
  }, {
    key: "checkNotification",
    value: function checkNotification(event) {
      this.setState({
        messageReceived: this.state.chatDisplay === "none"
      });
    }
  }, {
    key: "checkSize",
    value: function checkSize() {
      if (document.getElementById("layout").offsetWidth <= 700 && !this.hasBeenUpdated) {
        this.toggleChat("none");
        this.hasBeenUpdated = true;
      }
      if (document.getElementById("layout").offsetWidth > 700 && this.hasBeenUpdated) {
        this.hasBeenUpdated = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mySessionId = this.state.mySessionId;
      var localUser = this.state.localUser;
      var chatDisplay = {
        display: this.state.chatDisplay
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container",
        id: "container"
      }, this.props.getToolbarComponent ? this.props.getToolbarComponent({
        sessionId: mySessionId,
        user: localUser,
        showNotification: this.state.messageReceived,
        camStatusChanged: this.camStatusChanged,
        micStatusChanged: this.micStatusChanged,
        screenShare: this.screenShare,
        stopScreenShare: this.stopScreenShare,
        toggleFullscreen: this.toggleFullscreen,
        switchCamera: this.switchCamera,
        leaveSession: this.leaveSession,
        toggleChat: this.toggleChat
      }) : /*#__PURE__*/_react["default"].createElement(_ToolbarComponent["default"], {
        sessionId: mySessionId,
        user: localUser,
        showNotification: this.state.messageReceived,
        camStatusChanged: this.camStatusChanged,
        micStatusChanged: this.micStatusChanged,
        screenShare: this.screenShare,
        stopScreenShare: this.stopScreenShare,
        toggleFullscreen: this.toggleFullscreen,
        switchCamera: this.switchCamera,
        leaveSession: this.leaveSession,
        toggleChat: this.toggleChat
      }), /*#__PURE__*/_react["default"].createElement(_DialogExtension["default"], {
        showDialog: this.state.showExtensionDialog,
        cancelClicked: this.closeDialogExtension
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "layout",
        className: "bounds"
      }, localUser !== undefined && localUser.getStreamManager() !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: "OT_root OT_publisher custom-class",
        id: "localUser"
      }, /*#__PURE__*/_react["default"].createElement(_StreamComponent["default"], {
        user: localUser,
        handleNickname: this.nicknameChanged
      })), this.state.subscribers.map(function (sub, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          className: "OT_root OT_publisher custom-class",
          id: "remoteUsers"
        }, /*#__PURE__*/_react["default"].createElement(_StreamComponent["default"], {
          user: sub,
          streamId: sub.streamManager.stream.streamId
        }));
      }), localUser !== undefined && localUser.getStreamManager() !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: "OT_root OT_publisher custom-class",
        style: chatDisplay
      }, /*#__PURE__*/_react["default"].createElement(_ChatComponent["default"], {
        user: localUser,
        chatDisplay: this.state.chatDisplay,
        close: this.toggleChat,
        messageReceived: this.checkNotification
      }))));
    }

    /**
     * --------------------------
     * SERVER-SIDE RESPONSIBILITY
     * --------------------------
     * These methods retrieve the mandatory user token from OpenVidu Server.
     * This behaviour MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
     * the API REST, openvidu-java-client or openvidu-node-client):
     *   1) Initialize a session in OpenVidu Server	(POST /api/sessions)
     *   2) Generate a token in OpenVidu Server		(POST /api/tokens)
     *   3) The token must be consumed in Session.connect() method
     */
  }, {
    key: "getToken",
    value: function getToken() {
      var _this13 = this;
      return this.createSession(this.state.mySessionId).then(function (sessionId) {
        return _this13.createToken(sessionId);
      });
    }
  }, {
    key: "createSession",
    value: function createSession(sessionId) {
      var _this14 = this;
      return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
          customSessionId: sessionId
        });
        _axios["default"].post(_this14.OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization: "Basic " + btoa("OPENVIDUAPP:" + _this14.OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json"
          }
        }).then(function (response) {
          console.log("CREATE SESION", response);
          resolve(response.data.id);
        })["catch"](function (response) {
          var error = Object.assign({}, response);
          if (error.response && error.response.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn("No connection to OpenVidu Server. This may be a certificate error at " + _this14.OPENVIDU_SERVER_URL);
            if (window.confirm('No connection to OpenVidu Server. This may be a certificate error at "' + _this14.OPENVIDU_SERVER_URL + '"\n\nClick OK to navigate and accept it. ' + 'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' + _this14.OPENVIDU_SERVER_URL + '"')) {
              window.location.assign(_this14.OPENVIDU_SERVER_URL + "/accept-certificate");
            }
          }
        });
      });
    }
  }, {
    key: "createToken",
    value: function createToken(sessionId) {
      var _this15 = this;
      return new Promise(function (resolve, reject) {
        var data = JSON.stringify({});
        _axios["default"].post(_this15.OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + sessionId + "/connection", data, {
          headers: {
            Authorization: "Basic " + btoa("OPENVIDUAPP:" + _this15.OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json"
          }
        }).then(function (response) {
          console.log("TOKEN", response);
          resolve(response.data.token);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }]);
  return VideoRoomComponent;
}(_react.Component);
var _default = VideoRoomComponent;
exports["default"] = _default;