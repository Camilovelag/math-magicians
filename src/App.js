import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculator"
            element={(
              <div>
                <h2>Lets do some math</h2>
                <Calculator />
              </div>
            )}
          />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
