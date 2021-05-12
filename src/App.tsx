import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import AppRoutes from './routers/AppRoutes';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </Router>
  );
}

export default App;
