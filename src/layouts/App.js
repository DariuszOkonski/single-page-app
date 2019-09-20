import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <h1>Single Page App</h1>
      </div>
    </Router>
  );
}

export default App;
