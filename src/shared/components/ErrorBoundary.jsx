import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Unhandled UI Error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto mt-16 max-w-lg rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="text-xl font-bold text-red-700">Unexpected application error</h1>
          <p className="mt-2 text-sm text-red-600">Please refresh and contact support if the issue persists.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
