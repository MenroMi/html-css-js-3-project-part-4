// components
import {Header, Main} from '../components';
import {Box} from '../components/UI';

// styles
import './App.css';

function App() {
  return (
    <Box className="min-h-[100vh] overflow-hidden light">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
