import { Routes, Route } from 'react-router-dom';
import RetroFundingWrapped from './components/RetroFundingWrapped';
import ProjectPage from './components/ProjectPage'; // we’ll create this next

function App() {
  return (
    <Routes>
      <Route path="/" element={<RetroFundingWrapped />} />
      <Route path="/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
