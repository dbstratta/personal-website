import { PureComponent } from 'react';

type IntervalHandler = () => void;

export type IntervalProps = Readonly<{
  delay: number;
  handleInterval: IntervalHandler;
}>;

export class Interval extends PureComponent<IntervalProps> {
  private intervalId: number | null = null;

  public componentDidMount() {
    this.setInterval();
  }

  private setInterval() {
    this.intervalId = window.setInterval(
      this.props.handleInterval,
      this.props.delay,
    );
  }

  public componentDidUpdate() {
    this.resetInterval();
  }

  private resetInterval() {
    this.clearInterval();
    this.setInterval();
  }

  public componentWillUnmount() {
    this.clearInterval();
  }

  private clearInterval() {
    if (this.intervalId === null) {
      return;
    }

    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  public render() {
    return null;
  }
}

export default Interval;
