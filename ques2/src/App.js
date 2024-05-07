import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          {/* More routes can be added here using element={<ComponentName />} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

