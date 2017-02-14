import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


import BotWebChat from './components/BotWebChat';
import { IBotWebChatProps } from './components/IBotWebChatProps';
import * as strings from 'botWebChatStrings';
import { ChatProps, Chat, App } from '../../botwebchat/botchat';
import { IBotWebChatWebPartProps } from './IBotWebChatWebPartProps';
require('../../botwebchat/botchat.css');

export default class BotWebChatWebPart extends BaseClientSideWebPart<IBotWebChatWebPartProps> {
  public render(): void {

    // Create wrapper element and give it a random element id that we will use to load web chat control
    const element: React.ReactElement<IBotWebChatProps> = React.createElement(
      BotWebChat, {
        id: "FooTest123"
      }
    );
    ReactDom.render(element, this.domElement);

    // Initialize the BotChat.App with basic config data and the wrapper element
    App({
        user: {
          id: "TODO_GET_FROM_REST"
        },
        directLine: {
          token: "AAos-s9yFEI.cwA.atA.qMoxsYRlWzZPgKBuo5ZfsRpASbo6XsER9i6gBOORIZ8"
        }
      }, document.getElementById("FooTest123"));
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
