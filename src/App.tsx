import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/404Voyage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
