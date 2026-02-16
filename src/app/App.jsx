import { AppProviders } from './AppProviders';
import { AppRoutes } from '../routes/AppRoutes';
import { ErrorBoundary } from '../shared/components/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </ErrorBoundary>
  );
}
