"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _OvVideo = _interopRequireDefault(require("./OvVideo"));
var _MicOff = _interopRequireDefault(require("@material-ui/icons/MicOff"));
var _VideocamOff = _interopRequireDefault(require("@material-ui/icons/VideocamOff"));
var _VolumeUp = _interopRequireDefault(require("@material-ui/icons/VolumeUp"));
var _VolumeOff = _interopRequireDefault(require("@material-ui/icons/VolumeOff"));
var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));
var _Input = _interopRequireDefault(require("@material-ui/core/Input"));
var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _HighlightOff = _interopRequireDefault(require("@material-ui/icons/HighlightOff"));
var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));
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
var StreamComponent = /*#__PURE__*/function (_Component) {
  _inherits(StreamComponent, _Component);
  var _super = _createSuper(StreamComponent);
  function StreamComponent(props) {
    var _this;
    _classCallCheck(this, StreamComponent);
    _this = _super.call(this, props);
    _this.state = {
      nickname: _this.props.user.getNickname(),
      showForm: false,
      mutedSound: false,
      isFormValid: true
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handlePressKey = _this.handlePressKey.bind(_assertThisInitialized(_this));
    _this.toggleNicknameForm = _this.toggleNicknameForm.bind(_assertThisInitialized(_this));
    _this.toggleSound = _this.toggleSound.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(StreamComponent, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        nickname: event.target.value
      });
      event.preventDefault();
    }
  }, {
    key: "toggleNicknameForm",
    value: function toggleNicknameForm() {
      if (this.props.user.isLocal()) {
        this.setState({
          showForm: !this.state.showForm
        });
      }
    }
  }, {
    key: "toggleSound",
    value: function toggleSound() {
      this.setState({
        mutedSound: !this.state.mutedSound
      });
    }
  }, {
    key: "handlePressKey",
    value: function handlePressKey(event) {
      if (event.key === "Enter") {
        console.log(this.state.nickname);
        if (this.state.nickname.length >= 3 && this.state.nickname.length <= 20) {
          this.props.handleNickname(this.state.nickname);
          this.toggleNicknameForm();
          this.setState({
            isFormValid: true
          });
        } else {
          this.setState({
            isFormValid: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "OT_widget-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "pointer nickname"
      }, this.state.showForm ? /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        id: "nicknameForm"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        id: "closeButton",
        onClick: this.toggleNicknameForm
      }, /*#__PURE__*/_react["default"].createElement(_HighlightOff["default"], null)), /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
        htmlFor: "name-simple",
        id: "label"
      }, "Nickname"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        color: "inherit",
        id: "input",
        value: this.state.nickname,
        onChange: this.handleChange,
        onKeyPress: this.handlePressKey,
        required: true
      }), !this.state.isFormValid && this.state.nickname.length <= 3 && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
        id: "name-error-text"
      }, "Nickname is too short!"), !this.state.isFormValid && this.state.nickname.length >= 20 && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
        id: "name-error-text"
      }, "Nickname is too long!")) : /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.toggleNicknameForm
      }, /*#__PURE__*/_react["default"].createElement("span", {
        id: "nickname"
      }, this.props.user.getNickname()), this.props.user.isLocal() && /*#__PURE__*/_react["default"].createElement("span", {
        id: ""
      }, " (edit)"))), this.props.user !== undefined && this.props.user.getStreamManager() !== undefined ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "streamComponent"
      }, /*#__PURE__*/_react["default"].createElement(_OvVideo["default"], {
        user: this.props.user,
        mutedSound: this.state.mutedSound
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "statusIcons"
      }, !this.props.user.isVideoActive() ? /*#__PURE__*/_react["default"].createElement("div", {
        id: "camIcon"
      }, /*#__PURE__*/_react["default"].createElement(_VideocamOff["default"], {
        id: "statusCam"
      })) : null, !this.props.user.isAudioActive() ? /*#__PURE__*/_react["default"].createElement("div", {
        id: "micIcon"
      }, /*#__PURE__*/_react["default"].createElement(_MicOff["default"], {
        id: "statusMic"
      })) : null), /*#__PURE__*/_react["default"].createElement("div", null, !this.props.user.isLocal() && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        id: "volumeButton",
        onClick: this.toggleSound
      }, this.state.mutedSound ? /*#__PURE__*/_react["default"].createElement(_VolumeOff["default"], {
        color: "secondary"
      }) : /*#__PURE__*/_react["default"].createElement(_VolumeUp["default"], null)))) : null);
    }
  }]);
  return StreamComponent;
}(_react.Component);
exports["default"] = StreamComponent;