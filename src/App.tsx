import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Profile from './pages/Profile';
import NotFound from './pages/404Voyage';
import { AuthProvider } from './contexts/AuthContext';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
