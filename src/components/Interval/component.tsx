import { Component } from 'react';

type IntervalHandler = () => void;

export type IntervalProps = {
  readonly delay: number;
  readonly handleInterval: IntervalHandler;
};

export class Interval extends Component<IntervalProps> {
  private intervalId: number | null = null;
  private readonly handleInterval: IntervalHandler = this.props.handleInterval;

  public componentDidMount() {
    this.setInterval();
  }

  private setInterval() {
    this.intervalId = window.setInterval(this.handleInterval, this.props.delay);
  }

  public componentDidUpdate(prevProps: IntervalProps) {
    if (this.props.delay !== prevProps.delay) {
      this.resetInterval();
    }
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
    return this.props.children || null;
  }
}

export default Interval;
