import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App
