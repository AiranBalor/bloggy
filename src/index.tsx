import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemesProvider from 'app/providers/ThemeProvider/ui/ThemesProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
