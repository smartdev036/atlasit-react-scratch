import './App.scss';
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/home";
import TeamPage from './pages/team';

import TermsPage from './pages/terms';
import MainFooter from './layouts/footer';
import MainNav from './layouts/mainnav';
import DatenschutzPage from './pages/datenschutz';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect( () => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/karriere' element={<TeamPage />} />
        <Route exact path='/datenschutz' element={<DatenschutzPage />} />
        <Route exact path='/impressum' element={<TermsPage />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
