import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Polityka from './pages/Polityka';
import CookiesBanner from './components/CookiesBanner';

export default function App() {
  return (
    <HashRouter basename="/zajdel">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka" element={<Polityka />} />
      </Routes>
      <CookiesBanner />
    </HashRouter>
  );
}