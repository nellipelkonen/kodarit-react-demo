import React from 'react';
import './App.css';
import { Layout }from "./pages/Layout";
import { Home } from "./pages/Home";
import { Button } from './pages/Button';
import { Timer } from './pages/Timer';
import { Items } from './pages/Items';
import { TicTacToe } from './TicTacToe/TicTacToe';
import { InputTutorial } from './pages/Input';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Input' element={<InputTutorial />} />
          <Route path='Button' element={<Button />} />
          <Route path='Timer' element={<Timer />} />
          <Route path='Items' element={<Items />} />
          <Route path='TicTacToe' element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;