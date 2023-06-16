import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading === false ? (
          <Navbar />
        ) : (
          <LoadingScreen />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
