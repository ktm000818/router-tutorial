import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Profile from './pages/Profile';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;