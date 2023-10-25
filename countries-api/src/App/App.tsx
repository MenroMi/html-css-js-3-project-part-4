// libs
import {Route, BrowserRouter, Routes} from 'react-router-dom';

// components
import {
  Country,
  ErrorBoundary,
  Header,
  Main,
  RouteNotExist,
} from '../components';
import {Box} from '../components/UI';

// styles
import './App.css';
import {useState} from 'react';

function App() {
  const isSystemDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isSystemDark);

  return (
    <BrowserRouter basename="/">
      <Box className={`min-h-screen overflow-auto ${isDarkMode && 'dark'}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/:countryName"
            element={
              <ErrorBoundary>
                <Country />
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={<RouteNotExist info="This page is not exist." />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
