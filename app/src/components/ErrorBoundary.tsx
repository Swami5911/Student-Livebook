import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h1>Something went wrong. ⚠️</h1>
          <p>Please take a screenshot of this error and send it to the developer:</p>
          <div style={{ 
              background: "#f3f4f6", 
              padding: "1rem", 
              borderRadius: "8px", 
              overflow: "auto", 
              border: "1px solid #d1d5db" 
          }}>
            <h3 style={{ color: "#dc2626", marginTop: 0 }}>{this.state.error?.toString()}</h3>
            <pre style={{ fontSize: "0.8rem", whiteSpace: "pre-wrap" }}>
                {this.state.errorInfo?.componentStack}
            </pre>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
