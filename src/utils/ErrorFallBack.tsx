import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
};
