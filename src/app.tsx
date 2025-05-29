import { Routes, Route } from 'react-router-dom';
import RetroFundingWrapped from './components/RetroFundingWrapped';
import ProjectPage from './components/ProjectPage';
import { generateSlides, defaultConfig } from './config';

function App() {
  const slides = generateSlides(defaultConfig);

  return (
    <Routes>
      <Route path="/" element={<RetroFundingWrapped slides={slides} />} />
      <Route path="/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;

