"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var UserModel = /*#__PURE__*/function () {
  // 'remote' | 'local'

  function UserModel() {
    _classCallCheck(this, UserModel);
    _defineProperty(this, "connectionId", void 0);
    _defineProperty(this, "audioActive", void 0);
    _defineProperty(this, "videoActive", void 0);
    _defineProperty(this, "screenShareActive", void 0);
    _defineProperty(this, "nickname", void 0);
    _defineProperty(this, "streamManager", void 0);
    _defineProperty(this, "type", void 0);
    this.connectionId = '';
    this.audioActive = true;
    this.videoActive = true;
    this.screenShareActive = false;
    this.nickname = '';
    this.streamManager = null;
    this.type = 'local';
  }
  _createClass(UserModel, [{
    key: "isAudioActive",
    value: function isAudioActive() {
      return this.audioActive;
    }
  }, {
    key: "isVideoActive",
    value: function isVideoActive() {
      return this.videoActive;
    }
  }, {
    key: "isScreenShareActive",
    value: function isScreenShareActive() {
      return this.screenShareActive;
    }
  }, {
    key: "getConnectionId",
    value: function getConnectionId() {
      return this.connectionId;
    }
  }, {
    key: "getNickname",
    value: function getNickname() {
      return this.nickname;
    }
  }, {
    key: "getStreamManager",
    value: function getStreamManager() {
      return this.streamManager;
    }
  }, {
    key: "isLocal",
    value: function isLocal() {
      return this.type === 'local';
    }
  }, {
    key: "isRemote",
    value: function isRemote() {
      return !this.isLocal();
    }
  }, {
    key: "setAudioActive",
    value: function setAudioActive(isAudioActive) {
      this.audioActive = isAudioActive;
    }
  }, {
    key: "setVideoActive",
    value: function setVideoActive(isVideoActive) {
      this.videoActive = isVideoActive;
    }
  }, {
    key: "setScreenShareActive",
    value: function setScreenShareActive(isScreenShareActive) {
      this.screenShareActive = isScreenShareActive;
    }
  }, {
    key: "setStreamManager",
    value: function setStreamManager(streamManager) {
      this.streamManager = streamManager;
    }
  }, {
    key: "setConnectionId",
    value: function setConnectionId(conecctionId) {
      this.connectionId = conecctionId;
    }
  }, {
    key: "setNickname",
    value: function setNickname(nickname) {
      this.nickname = nickname;
    }
  }, {
    key: "setType",
    value: function setType(type) {
      if (type === 'local' | type === 'remote') {
        this.type = type;
      }
    }
  }]);
  return UserModel;
}();
var _default = UserModel;
exports["default"] = _default;