import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoryGenerator } from './components/StoryGenerator';
import { StoryDisplay } from './components/StoryDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoryGenerator />} />
        <Route path="/story" element={<StoryDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
