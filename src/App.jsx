import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import des composants pour chaque page
import Prestations from './components/Prestations';
import NettoyageHarmonisation from './components/NettoyageHarmonisation';
import HypnosePhobieEau from './components/HypnosePhobieEau';
import SoinsEnergetiques from './components/SoinsEnergetiques';
import AtelierExploration from './components/AtelierExploration';
import Hypnose from './components/Hypnose';
import QuiSuisJe from './components/QuiSuisJe';
import MesPrincipes from './components/MesPrincipes';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hypnose Magnétisme</h1>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li>
              <Link to="/prestations">Prestations</Link>
              <ul>
                <li><Link to="/nettoyage-harmonisation">Nettoyage et harmonisation d'un lieu</Link></li>
                <li><Link to="/hypnose-phobie-eau">Hypnose et phobie de l'eau</Link></li>
              </ul>
            </li>
            <li><Link to="/soins-energetiques">Soins énergétiques</Link></li>
            <li><Link to="/atelier-exploration">Atelier d'Exploration Énergétique</Link></li>
            <li><Link to="/hypnose">Hypnose</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/nettoyage-harmonisation" element={<NettoyageHarmonisation />} />
        <Route path="/hypnose-phobie-eau" element={<HypnosePhobieEau />} />
        <Route path="/soins-energetiques" element={<SoinsEnergetiques />} />
        <Route path="/atelier-exploration" element={<AtelierExploration />} />
        <Route path="/hypnose" element={<Hypnose />} />
      </Routes>

      <footer className="App-footer">
        <nav>
          <ul>
            <li><Link to="/qui-suis-je">Qui suis je</Link></li>
            <li><Link to="/mes-principes">Mes principes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <p>© 2024 Richard Gaglione Hypnose-Magnétisme</p>
      </footer>
    </div>
  );
}

// Composant pour la page d'accueil
function Accueil() {
  return (
    <div className="Accueil">
      <h2>Bienvenue</h2>
      <p>Présentation générale de Richard Gaglione et de ses services.</p>
    </div>
  );
}

export default App;
