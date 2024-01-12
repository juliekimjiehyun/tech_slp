import './App.css';
import KMatching from './pages/KMatching';
import GMatching from './pages/GMatching';
import FMatching from './pages/FMatching';
import VMatching from './pages/VMatching';
import SMatching from './pages/SMatching';
import ZMatching from './pages/ZMatching';
import LMatching from './pages/LMatching';
import RMatching from './pages/RMatching';
import RBlendsMatching from './pages/RBlendsMatching';
import SBlendsMatching from './pages/SBlendsMatching';
import LBlendsMatching from './pages/LBlendsMatching';
import VocalicRMatching from './pages/VocalicRMatching';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MatchingGame from './pages/MatchingGames/MatchingGame';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="MatchingGame" element={<MatchingGame />} />
          <Route path="KMatching" element={<KMatching />} />
          <Route path="GMatching" element={<GMatching />} />
          <Route path="FMatching" element={<FMatching />} />
          <Route path="VMatching" element={<VMatching />} />
          <Route path="SMatching" element={<SMatching />} />
          <Route path="ZMatching" element={<ZMatching />} />
          <Route path="LMatching" element={<LMatching />} />
          <Route path="RMatching" element={<RMatching />} />
          <Route path="RBlendsMatching" element={<RBlendsMatching />} />
          <Route path="LBlendsMatching" element={<LBlendsMatching />} />
          <Route path="SBlendsMatching" element={<SBlendsMatching />} />
          <Route path="VocalicRMatching" element={<VocalicRMatching />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;