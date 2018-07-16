import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export type ScrollToHashBaseProps = {
  readonly hash: string;
  readonly scrollBehavior?: ScrollBehavior;
};

export class ScrollToHashBase extends Component<ScrollToHashBaseProps> {
  public static readonly defaultProps = { scrollBehavior: 'smooth' };

  public componentDidUpdate() {
    this.scrollToHash();
  }

  private scrollToHash = (): void => {
    if (this.props.hash === '') {
      return;
    }

    const elementId = this.getElementId();
    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: this.props.scrollBehavior!,
      block: 'start',
    });
  };

  private getElementId = (): string => this.props.hash.slice(1);

  public render() {
    return null;
  }
}

export type ScrollToHashProps = Pick<ScrollToHashBaseProps, 'scrollBehavior'>;

const ScrollToHash: React.SFC<ScrollToHashProps> = ({ scrollBehavior }) => (
  <Route
    render={({ location }) => (
      <ScrollToHashBase hash={location.hash} scrollBehavior={scrollBehavior} />
    )}
  />
);

export default ScrollToHash;
