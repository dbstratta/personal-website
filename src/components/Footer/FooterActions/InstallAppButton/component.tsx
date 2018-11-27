import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import {
  Event as AnalyticsEvent,
  sendAnalyticsEvent,
} from '../../../../analytics';
import { ClassNameProp } from '../../../../types';
import { footerLinkStyle } from '../FooterLink';

const StyledButton = styled.button`
  ${footerLinkStyle};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: var(--xs-space);
  color: var(--quaternary-font-color);
`;

export type InstallAppButtonProps = ClassNameProp;

export type InstallAppButtonState = Readonly<{ event: Event | null }>;

export class InstallAppButton extends React.PureComponent<
  InstallAppButtonProps,
  InstallAppButtonState
> {
  public readonly state: InstallAppButtonState = { event: null };

  public componentDidMount() {
    this.addBeforeInstallPromptEventListener();
    InstallAppButton.addAppInstalledEventListener();
  }

  private addBeforeInstallPromptEventListener(): void {
    window.addEventListener('beforeinstallprompt', async (event: Event) => {
      this.setState({ event });
    });
  }

  private handleClick = async (): Promise<void> => {
    if (!this.state.event) {
      return;
    }

    // @ts-ignore
    this.state.event.prompt();

    // @ts-ignore
    const choice = await this.state.event.userChoice;

    InstallAppButton.sendPromptChoiceOutcomeAnalyticsEvent(choice.outcome);
  };

  private static sendPromptChoiceOutcomeAnalyticsEvent(outcome: string): void {
    if (outcome === 'accepted') {
      InstallAppButton.sendPromptAcceptedAnalyticsEvent();
    } else {
      InstallAppButton.sendPromptDismissedAnalyticsEvent();
    }
  }

  private static sendPromptAcceptedAnalyticsEvent(): void {
    const promptAcceptedAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'prompt accepted',
    };

    sendAnalyticsEvent(promptAcceptedAnalyticsEvent);
  }

  private static sendPromptDismissedAnalyticsEvent(): void {
    const promptDismissedAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'prompt dismissed',
    };

    sendAnalyticsEvent(promptDismissedAnalyticsEvent);
  }

  private static addAppInstalledEventListener(): void {
    window.addEventListener('appinstalled', event => {
      InstallAppButton.sendAppInstalledAnalyticsEvent();
    });
  }

  private static sendAppInstalledAnalyticsEvent(): void {
    const appInstalledAnalyticsEvent: AnalyticsEvent = {
      category: 'Install',
      action: 'installed',
    };

    sendAnalyticsEvent(appInstalledAnalyticsEvent);
  }

  public render() {
    if (!this.state.event) {
      return null;
    }

    return (
      <StyledButton
        onClick={this.handleClick}
        className={this.props.className}
        aria-label="Install this app"
      >
        <StyledFontAwesomeIcon icon={faRobot} size="sm" />
        Install this app
      </StyledButton>
    );
  }
}

export default InstallAppButton;
