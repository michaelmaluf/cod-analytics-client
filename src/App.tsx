import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import PredictionWorkFlowManager from './components/PredictionWorkflowManager';
import PredictionOutcomeManager from './components/PredictionOutcomeManager';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PredictionWorkFlowManager />} />
      <Route path="/predictions" element={<PredictionOutcomeManager />} />
    </Routes>
  );
}

export default App;
