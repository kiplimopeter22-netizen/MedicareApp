import { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import AppointmentPage from './components/AppointmentPage';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (email) => {
    setUserName(email ? email.split('@')[0] : 'User');
    setIsAuthenticated(true);
  };

  const handleSignup = (name, email) => {
    setUserName(name || (email ? email.split('@')[0] : 'User'));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowSignup(false);
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {isAuthenticated ? (
        <>
          <Home userName={userName} onLogout={handleLogout} />
          <AppointmentPage />
        </>
      ) : showSignup ? (
        <SignupPage onSwitchToLogin={() => setShowSignup(false)} onSignup={handleSignup} />
      ) : (
        <LoginPage onSwitchToSignup={() => setShowSignup(true)} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App
