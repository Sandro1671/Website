import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainpage" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
