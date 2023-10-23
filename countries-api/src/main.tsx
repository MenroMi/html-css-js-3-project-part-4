// basic
import ReactDOM from 'react-dom/client';

// app
import App from './App';

// context provider
import CountriesProvider from './provider';

// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CountriesProvider>
    <App />
  </CountriesProvider>,
  // </React.StrictMode>,
);
