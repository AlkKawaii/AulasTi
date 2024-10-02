import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Default from './pages/Default';
import NotFound from './pages/NotFound';
import WarsPage from './pages/WarsPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='wars' element={<WarsPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
