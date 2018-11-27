import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Event, sendAnalyticsEvent } from '../../../../analytics';
import { ClassNameProp } from '../../../../types';
import { footerLinkStyle } from '../FooterLink';

const StyledButton = styled.button`
  ${footerLinkStyle};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: var(--xs-space);
  color: var(--quaternary-font-color);
`;

type NavigatorShareFnArgs = {
  url: string;
  text: string;
  title: string;
};

type NavigatorShareFn = (data: NavigatorShareFnArgs) => Promise<void>;

type NavigatorShare = Navigator & { share: NavigatorShareFn };

export type ShareButtonProps = ClassNameProp;

export class ShareButton extends PureComponent<ShareButtonProps> {
  private readonly handlePointerDown = (): Promise<void> => this.shareWebsite();

  private readonly shareWebsite = async (): Promise<void> => {
    if (!('share' in (navigator as NavigatorShare))) {
      return;
    }

    const url = window.location.origin;

    try {
      await (navigator as NavigatorShare).share({
        url,
        text: 'Diego Stratta | Web Developer',
        title: document.title,
      });

      this.sendShareSuccessAnalyticsEvent();
    } catch (error) {
      this.sendShareFailureAnalyticsEvent();
    }
  };

  private readonly sendShareSuccessAnalyticsEvent = (): void => {
    const event: Event = { category: 'Share', action: 'Share' };
    sendAnalyticsEvent(event);
  };

  private readonly sendShareFailureAnalyticsEvent = (): void => {
    const event: Event = { category: 'Share', action: 'Cancel' };
    sendAnalyticsEvent(event);
  };

  public render() {
    if (!(navigator as NavigatorShare).share) {
      return null;
    }

    return (
      <StyledButton
        onPointerDown={this.handlePointerDown}
        className={this.props.className}
        aria-label="Share this website"
        title="Share this website"
      >
        <StyledFontAwesomeIcon icon={faShareAlt} size="sm" />
        Share this website
      </StyledButton>
    );
  }
}

export default ShareButton;
