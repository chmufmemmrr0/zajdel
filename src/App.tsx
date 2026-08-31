import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Polityka from './pages/Polityka';
import CookiesBanner from './components/CookiesBanner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka" element={<Polityka />} />
      </Routes>
      <CookiesBanner />
    </BrowserRouter>
  );
}