import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container main shadow-sm p-2 mb-1 bg-white rounded">
      <Weather></Weather>
    </div>
  );
}

export default App;
