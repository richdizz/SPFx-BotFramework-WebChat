import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './BotWebChat.module.scss';
import { IBotWebChatProps } from './IBotWebChatProps';

export default class BotWebChat extends React.Component<IBotWebChatProps, void> {
  public render(): React.ReactElement<IBotWebChatProps> {
    return (
      <div id={this.props.id}>
      </div>
    );
  }
}
