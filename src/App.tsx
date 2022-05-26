import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import './assets/styles/global.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wrongpage" element={<WrongPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
