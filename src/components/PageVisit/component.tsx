import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import { sendPageVisit } from '../../analytics';

export type PageVisitProps = {
  pathname: string;
};

export class PageVisit extends PureComponent<PageVisitProps> {
  public componentDidMount() {
    sendPageVisit({ path: this.getCurrentPathname() });
  }

  private getCurrentPathname() {
    return this.props.pathname;
  }

  public componentDidUpdate(prevProps: PageVisitProps) {
    const prevPath = prevProps.pathname;
    const currentPath = this.getCurrentPathname();

    if (prevPath !== currentPath) {
      sendPageVisit({ path: currentPath });
    }
  }

  public render() {
    return null;
  }
}

const PageVisitWithProps = () => (
  <Route
    render={({ location }) => <PageVisit pathname={location.pathname} />}
  />
);

export default PageVisitWithProps;
