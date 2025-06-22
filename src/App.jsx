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
import HypnoseEricksoniennePnl from './components/HypnoseEricksoniennePnl';
import HypnoseSpirituelle from './components/HypnoseSpirituelle';
import ParcoursBienEtre from './components/ParcoursBienEtre';

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
              </ul>
            </li>
            <li>
              <Link to="/soins-energetiques">Soins énergétiques</Link>
              <ul>
                <li><Link to="/nettoyage-harmonisation">Nettoyage et harmonisation d'un lieu</Link></li>
                <li><Link to="/atelier-exploration">Atelier d'Exploration Énergétique</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/hypnose">Hypnose</Link>
              <ul>
                <li><Link to="/hypnose-phobie-eau">Hypnose et phobie de l'eau</Link></li>
                <li><Link to="/hypnose-ericksonienne-pnl">Hypnose ERICKSONIENNE et PNL</Link></li>
                <li><Link to="/hypnose-spirituelle">Hypnose spirituelle</Link></li>
                <li><Link to="/parcours-bien-etre">Parcours bien-être</Link></li>
              </ul>
            </li>
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
        <Route path="/hypnose-ericksonienne-pnl" element={<HypnoseEricksoniennePnl />} />
        <Route path="/hypnose-spirituelle" element={<HypnoseSpirituelle />} />
        <Route path="/parcours-bien-etre" element={<ParcoursBienEtre />} />
        <Route path="/qui-suis-je" element={<QuiSuisJe />} />
        <Route path="/mes-principes" element={<MesPrincipes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="App-footer">
        <nav>
          <ul>
            <li><Link to="/qui-suis-je">Qui suis je</Link></li>
            <li><Link to="/mes-principes">Mes principes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <p>réalisé par <a href="https://deviaweb.fr">Deviaweb</a></p>
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
