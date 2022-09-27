import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemesProvider from 'app/providers/ThemeProvider/ui/ThemesProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
