// libs
import {Route, BrowserRouter, Routes} from 'react-router-dom';

// components
import {
  CountryDetail,
  ErrorBoundary,
  Header,
  Main,
  RouteNotExist,
} from '../components';
import {Box} from '../components/UI';

// styles
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Box className="min-h-screen overflow-auto light">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/:countryName"
            element={
              <ErrorBoundary>
                <CountryDetail />
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
