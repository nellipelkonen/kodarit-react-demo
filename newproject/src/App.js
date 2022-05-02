import React from 'react';
import './App.css';
import { Layout }from "./pages/Layout";
import { Home } from "./pages/Home";
import { Button } from './pages/Button';
import { Timer } from './pages/Timer';
import { Items } from './pages/Items';
import { InputTutorial } from './pages/Input';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
    <div className='asd'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='input' element={<InputTutorial />} />
          <Route path='button' element={<Button />} />
          <Route path='timer' element={<Timer />} />
          <Route path='items' element={<Items />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;