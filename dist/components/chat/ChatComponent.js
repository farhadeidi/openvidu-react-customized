"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));
var _HighlightOff = _interopRequireDefault(require("@material-ui/icons/HighlightOff"));
var _Send = _interopRequireDefault(require("@material-ui/icons/Send"));
var _core = require("@material-ui/core");
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
var ChatComponent = /*#__PURE__*/function (_Component) {
  _inherits(ChatComponent, _Component);
  var _super = _createSuper(ChatComponent);
  function ChatComponent(props) {
    var _this;
    _classCallCheck(this, ChatComponent);
    _this = _super.call(this, props);
    _this.state = {
      messageList: [],
      message: ""
    };
    _this.chatScroll = /*#__PURE__*/_react["default"].createRef();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handlePressKey = _this.handlePressKey.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ChatComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.props.user.getStreamManager().stream.session.on("signal:chat", function (event) {
        var data = JSON.parse(event.data);
        var messageList = _this2.state.messageList;
        messageList.push({
          connectionId: event.from.connectionId,
          nickname: data.nickname,
          message: data.message
        });
        var document = window.document;
        setTimeout(function () {
          var userImg = document.getElementById("userImg-" + (_this2.state.messageList.length - 1));
          var video = document.getElementById("video-" + data.streamId);
          var avatar = userImg.getContext("2d");
          avatar.drawImage(video, 200, 120, 285, 285, 0, 0, 60, 60);
          _this2.props.messageReceived();
        }, 50);
        _this2.setState({
          messageList: messageList
        });
        _this2.scrollToBottom();
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: "handlePressKey",
    value: function handlePressKey(event) {
      if (event.key === "Enter") {
        this.sendMessage();
      }
    }
  }, {
    key: "sendMessage",
    value: function sendMessage() {
      console.log(this.state.message);
      if (this.props.user && this.state.message) {
        var message = this.state.message.replace(/ +(?= )/g, "");
        if (message !== "" && message !== " ") {
          var data = {
            message: message,
            nickname: this.props.user.getNickname(),
            streamId: this.props.user.getStreamManager().stream.streamId
          };
          this.props.user.getStreamManager().stream.session.signal({
            data: JSON.stringify(data),
            type: "chat"
          });
        }
      }
      this.setState({
        message: ""
      });
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var _this3 = this;
      setTimeout(function () {
        try {
          _this3.chatScroll.current.scrollTop = _this3.chatScroll.current.scrollHeight;
        } catch (err) {}
      }, 20);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.close(undefined);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var styleChat = {
        display: this.props.chatDisplay
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "chatContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "chatComponent",
        style: styleChat
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "chatToolbar"
      }, /*#__PURE__*/_react["default"].createElement("span", null, this.props.user.getStreamManager().stream.session.sessionId, " - CHAT"), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        id: "closeButton",
        onClick: this.close
      }, /*#__PURE__*/_react["default"].createElement(_HighlightOff["default"], {
        color: "secondary"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "message-wrap",
        ref: this.chatScroll
      }, this.state.messageList.map(function (data, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          id: "remoteUsers",
          className: "message" + (data.connectionId !== _this4.props.user.getConnectionId() ? " left" : " right")
        }, /*#__PURE__*/_react["default"].createElement("canvas", {
          id: "userImg-" + i,
          width: "60",
          height: "60",
          className: "user-img"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "msg-detail"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "msg-info"
        }, /*#__PURE__*/_react["default"].createElement("p", null, " ", data.nickname)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "msg-content"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "triangle"
        }), /*#__PURE__*/_react["default"].createElement("p", {
          className: "text"
        }, data.message))));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "messageInput"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Send a messge",
        id: "chatInput",
        value: this.state.message,
        onChange: this.handleChange,
        onKeyPress: this.handlePressKey
      }), /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
        title: "Send message"
      }, /*#__PURE__*/_react["default"].createElement(_Fab["default"], {
        size: "small",
        id: "sendButton",
        onClick: this.sendMessage
      }, /*#__PURE__*/_react["default"].createElement(_Send["default"], null))))));
    }
  }]);
  return ChatComponent;
}(_react.Component);
exports["default"] = ChatComponent;