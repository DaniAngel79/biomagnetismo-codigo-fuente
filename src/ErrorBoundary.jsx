import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 text-red-900 border border-red-200 rounded-xl m-4">
          <h2 className="text-xl font-bold mb-2">Fallo Crítico de Renderizado</h2>
          <p className="font-mono text-sm bg-white p-3 rounded border border-red-100 mb-4">
            {this.state.error && this.state.error.toString()}
          </p>
          <pre className="text-xs overflow-auto bg-white p-3 rounded">
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;