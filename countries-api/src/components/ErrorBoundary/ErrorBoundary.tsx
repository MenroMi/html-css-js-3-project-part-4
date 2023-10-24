// basic
import {Component, ErrorInfo, ReactNode} from 'react';

// components
import {Box} from '../UI';
import {ErrorSadIcon} from '../Icons';
import {RouteNotExist} from '../Errors';

// interface
interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <RouteNotExist info="Something went wrong. Please, if you search a country use search bar." />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
