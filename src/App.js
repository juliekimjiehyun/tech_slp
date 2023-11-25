import './App.css';
import KMatching from './pages/KMatching';
import GMatching from './pages/GMatching';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/KMatching" element={<KMatching/>} />
          <Route path="/GMatching" element={<GMatching />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;