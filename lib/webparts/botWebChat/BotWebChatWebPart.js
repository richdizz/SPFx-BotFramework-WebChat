"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDom = require('react-dom');
var sp_core_library_1 = require('@microsoft/sp-core-library');
var sp_webpart_base_1 = require('@microsoft/sp-webpart-base');
var BotWebChat_1 = require('./components/BotWebChat');
var strings = require('botWebChatStrings');
var botchat_1 = require('../../botwebchat/botchat');
require('../../botwebchat/botchat.css');
var BotWebChatWebPart = (function (_super) {
    __extends(BotWebChatWebPart, _super);
    function BotWebChatWebPart() {
        _super.apply(this, arguments);
    }
    BotWebChatWebPart.prototype.render = function () {
        // Create wrapper element and give it a random element id that we will use to load web chat control
        var element = React.createElement(BotWebChat_1.default, {
            id: "FooTest123"
        });
        ReactDom.render(element, this.domElement);
        // Initialize the BotChat.App with basic config data and the wrapper element
        botchat_1.App({
            user: {
                id: "TODO_GET_FROM_REST"
            },
            directLine: {
                token: "AAos-s9yFEI.cwA.atA.qMoxsYRlWzZPgKBuo5ZfsRpASbo6XsER9i6gBOORIZ8"
            }
        }, document.getElementById("FooTest123"));
    };
    Object.defineProperty(BotWebChatWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    BotWebChatWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return BotWebChatWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotWebChatWebPart;

//# sourceMappingURL=BotWebChatWebPart.js.map
