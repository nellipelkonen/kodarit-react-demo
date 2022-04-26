import React from 'react';
import './App.css';
import { Layout }from "./pages/layout";
import { Home } from "./pages/home";
import { Button } from './pages/button';
import { InputTutorial } from './pages/input';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
    <div className='maincontent'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='input' element={<InputTutorial />} />
          <Route path='button' element={<Button />
          } />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;