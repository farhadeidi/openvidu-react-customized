"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Mic = _interopRequireDefault(require("@material-ui/icons/Mic"));
var _MicOff = _interopRequireDefault(require("@material-ui/icons/MicOff"));
var _Videocam = _interopRequireDefault(require("@material-ui/icons/Videocam"));
var _VideocamOff = _interopRequireDefault(require("@material-ui/icons/VideocamOff"));
var _Fullscreen = _interopRequireDefault(require("@material-ui/icons/Fullscreen"));
var _FullscreenExit = _interopRequireDefault(require("@material-ui/icons/FullscreenExit"));
var _SwitchVideo = _interopRequireDefault(require("@material-ui/icons/SwitchVideo"));
var _PictureInPicture = _interopRequireDefault(require("@material-ui/icons/PictureInPicture"));
var _ScreenShare = _interopRequireDefault(require("@material-ui/icons/ScreenShare"));
var _StopScreenShare = _interopRequireDefault(require("@material-ui/icons/StopScreenShare"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _PowerSettingsNew = _interopRequireDefault(require("@material-ui/icons/PowerSettingsNew"));
var _QuestionAnswer = _interopRequireDefault(require("@material-ui/icons/QuestionAnswer"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var ToolbarComponent = /*#__PURE__*/function (_Component) {
  _inherits(ToolbarComponent, _Component);
  var _super = _createSuper(ToolbarComponent);
  function ToolbarComponent(props) {
    var _this;
    _classCallCheck(this, ToolbarComponent);
    _this = _super.call(this, props);
    _this.state = {
      fullscreen: false
    };
    _this.camStatusChanged = _this.camStatusChanged.bind(_assertThisInitialized(_this));
    _this.micStatusChanged = _this.micStatusChanged.bind(_assertThisInitialized(_this));
    _this.screenShare = _this.screenShare.bind(_assertThisInitialized(_this));
    _this.stopScreenShare = _this.stopScreenShare.bind(_assertThisInitialized(_this));
    _this.toggleFullscreen = _this.toggleFullscreen.bind(_assertThisInitialized(_this));
    _this.switchCamera = _this.switchCamera.bind(_assertThisInitialized(_this));
    _this.leaveSession = _this.leaveSession.bind(_assertThisInitialized(_this));
    _this.toggleChat = _this.toggleChat.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ToolbarComponent, [{
    key: "micStatusChanged",
    value: function micStatusChanged() {
      this.props.micStatusChanged();
    }
  }, {
    key: "camStatusChanged",
    value: function camStatusChanged() {
      this.props.camStatusChanged();
    }
  }, {
    key: "screenShare",
    value: function screenShare() {
      this.props.screenShare();
    }
  }, {
    key: "stopScreenShare",
    value: function stopScreenShare() {
      this.props.stopScreenShare();
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      this.setState({
        fullscreen: !this.state.fullscreen
      });
      this.props.toggleFullscreen();
    }
  }, {
    key: "switchCamera",
    value: function switchCamera() {
      this.props.switchCamera();
    }
  }, {
    key: "leaveSession",
    value: function leaveSession() {
      this.props.leaveSession();
    }
  }, {
    key: "toggleChat",
    value: function toggleChat() {
      this.props.toggleChat();
    }
  }, {
    key: "render",
    value: function render() {
      var mySessionId = this.props.sessionId;
      var localUser = this.props.user;
      return /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
        className: "toolbar",
        id: "header"
      }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
        className: "toolbar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "navSessionInfo",
        style: {
          paddingLeft: 16
        }
      }, this.props.sessionId && /*#__PURE__*/_react["default"].createElement("div", {
        id: "titleContent"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        id: "session-title"
      }, mySessionId))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "buttonsContent"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        className: "navButton",
        id: "navMicButton",
        onClick: this.micStatusChanged
      }, localUser !== undefined && localUser.isAudioActive() ? /*#__PURE__*/_react["default"].createElement(_Mic["default"], null) : /*#__PURE__*/_react["default"].createElement(_MicOff["default"], {
        color: "secondary"
      })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        className: "navButton",
        id: "navCamButton",
        onClick: this.camStatusChanged
      }, localUser !== undefined && localUser.isVideoActive() ? /*#__PURE__*/_react["default"].createElement(_Videocam["default"], null) : /*#__PURE__*/_react["default"].createElement(_VideocamOff["default"], {
        color: "secondary"
      })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        className: "navButton",
        onClick: this.screenShare
      }, localUser !== undefined && localUser.isScreenShareActive() ? /*#__PURE__*/_react["default"].createElement(_PictureInPicture["default"], null) : /*#__PURE__*/_react["default"].createElement(_ScreenShare["default"], null)), localUser !== undefined && localUser.isScreenShareActive() && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: this.stopScreenShare,
        id: "navScreenButton"
      }, /*#__PURE__*/_react["default"].createElement(_StopScreenShare["default"], {
        color: "secondary"
      })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        className: "navButton",
        onClick: this.switchCamera
      }, /*#__PURE__*/_react["default"].createElement(_SwitchVideo["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        className: "navButton",
        onClick: this.toggleFullscreen
      }, localUser !== undefined && this.state.fullscreen ? /*#__PURE__*/_react["default"].createElement(_FullscreenExit["default"], null) : /*#__PURE__*/_react["default"].createElement(_Fullscreen["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "secondary",
        className: "navButton",
        onClick: this.leaveSession,
        id: "navLeaveButton"
      }, /*#__PURE__*/_react["default"].createElement(_PowerSettingsNew["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        onClick: this.toggleChat,
        id: "navChatButton"
      }, this.props.showNotification && /*#__PURE__*/_react["default"].createElement("div", {
        id: "point",
        className: ""
      }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: "Chat"
      }, /*#__PURE__*/_react["default"].createElement(_QuestionAnswer["default"], null))))));
    }
  }]);
  return ToolbarComponent;
}(_react.Component);
exports["default"] = ToolbarComponent;