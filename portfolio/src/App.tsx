import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/" element={<Navigate to={'/mainpage'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
