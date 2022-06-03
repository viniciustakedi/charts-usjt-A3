import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Previsions from './pages/Previsions';
import WrongPage from './pages/WrongPage';
import Qrcode from './pages/Qrcode';
import Home from './pages/Home';

import './assets/styles/global.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/previsoes" element={<Previsions />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/wrongpage" element={<WrongPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
