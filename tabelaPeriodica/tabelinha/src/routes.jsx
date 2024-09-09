import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import Default from './pages/Default';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='table' element={<Table />} />
        </Route>
      </Routes>
    </Router>
  );
}
