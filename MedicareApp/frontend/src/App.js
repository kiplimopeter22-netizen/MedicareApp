import { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-text">
      {showSignup ? (
        <SignupPage onSwitchToLogin={() => setShowSignup(false)} />
      ) : (
        <LoginPage onSwitchToSignup={() => setShowSignup(true)} />
      )}
    </div>
  );
}

export default App;
