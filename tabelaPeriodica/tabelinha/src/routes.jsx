import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import Default from './pages/Default';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='table' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
