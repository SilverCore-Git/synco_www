import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Configurateur from './pages/Configurateur';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="presentation" element={<Presentation />} />
        <Route path="*" element={<Home />} />
      </Route>
      {/* Le configurateur occupe tout l'écran : il a son propre en-tête, sans footer. */}
      <Route path="configurateur" element={<Configurateur />} />
    </Routes>
  );
}
