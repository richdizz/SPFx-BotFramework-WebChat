import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IBotWebChatWebPartProps } from './IBotWebChatWebPartProps';
export default class BotWebChatWebPart extends BaseClientSideWebPart<IBotWebChatWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
