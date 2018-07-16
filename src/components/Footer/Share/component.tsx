import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Event, sendAnalyticsEvent } from '../../../analytics';

type NavigatorShareFnArgs = {
  url: USVString;
  text: USVString;
  title: USVString;
};

type NavigatorShareFn = (data: NavigatorShareFnArgs) => Promise<void>;

type NavigatorShare = Navigator & { share: NavigatorShareFn };

const StyledButton = styled.button`
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
  border: none;
`;

export class Share extends PureComponent {
  private handleClick = (): Promise<void> => this.shareWebsite();

  private shareWebsite = async (): Promise<void> => {
    try {
      await (navigator as NavigatorShare).share({
        url: window.location.href,
        text: 'Diego Stratta',
        title: document.title,
      });

      const event: Event = { category: 'Share', action: 'share' };
      sendAnalyticsEvent(event);
    } catch (e) {
      const event: Event = { category: 'Share', action: 'cancel' };
      sendAnalyticsEvent(event);
    }
  };

  public render() {
    if (!(navigator as NavigatorShare).share) {
      return null;
    }

    return (
      <StyledButton onClick={this.handleClick}>Share this website</StyledButton>
    );
  }
}

export default Share;
