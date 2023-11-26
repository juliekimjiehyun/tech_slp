import './App.css';
import KMatching from './pages/KMatching';
import GMatching from './pages/GMatching';
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
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;