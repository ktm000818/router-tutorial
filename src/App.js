import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item1" element={<Main />} />
        <Route path="/item2" element={<Main />} />
        <Route path="/item3" element={<Main />} />
        <Route path="/item4" element={<Main />} />
        <Route path="/item5" element={<Main />} />
      </Routes>
    </>

  );
};

export default App;