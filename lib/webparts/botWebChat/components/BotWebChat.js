"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BotWebChat = (function (_super) {
    __extends(BotWebChat, _super);
    function BotWebChat() {
        _super.apply(this, arguments);
    }
    BotWebChat.prototype.render = function () {
        return (React.createElement("div", {id: this.props.id}));
    };
    return BotWebChat;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotWebChat;

//# sourceMappingURL=BotWebChat.js.map
