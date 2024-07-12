import { useState } from 'react';
import './App.css';
import View from './components/View';

import Add from './components/Add';
import { Route, Routes } from 'react-router-dom';
import Demoaxios from './components/Demoaxios';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="poke">
      <h1>Welcome To React Session</h1>
      <View />
      <Routes>
        <Route path="/" element={<Demoaxios/>} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
