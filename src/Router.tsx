import { Route, Routes } from 'react-router-dom';
import CandidateList from './pages/CandidateList/CandidateList';
import Home from './pages/Home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidate-list" element={<CandidateList />} />
    </Routes>
  );
};

export default Router;
