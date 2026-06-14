import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import AppointmentPage from './components/AppointmentPage';
import Departments from './Departments';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'departments', label: 'Departments' },
  { key: 'appointments', label: 'Appointment' },
];

function HeaderNav({ activePage, onNavigate, onLogout, userName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">M</div>
          <div>
            <h1 className="text-2xl font-bold">Medicare App</h1>
            <p className="text-sm text-slate-500">Welcome back, {userName || 'Member'}.</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={`text-sm font-medium transition hover:text-primary ${activePage === item.key ? 'text-primary' : 'text-slate-700'}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onLogout}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            Logout
          </button>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="p-2 rounded-md border"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? '✕' : '☰'}
          </button>
          {menuOpen && (
            <div id="mobile-menu" className="absolute right-4 top-20 w-64 bg-white rounded-md shadow-lg py-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    onNavigate(item.key);
                    setMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">Medicare App</h4>
          <p className="text-sm">Your health, our priority.</p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm">Kilimani Road, Nairobi</p>
          <p className="text-sm">+254 7077553196</p>
          <p className="text-sm">info@medicareapp.co.ke</p>
        </div>
        <div>
          <h5 className="font-semibold">Hours</h5>
          <p className="text-sm">Emergency: 24/7</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [activePage, setActivePage] = useState('home');
  const [users, setUsers] = useState([]);

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return 'Please enter both email and password.';
    }

    const account = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if (!account) {
      return 'No account found. Please sign up first.';
    }

    if (account.password !== password) {
      return 'Incorrect password. Please try again.';
    }

    setUserName(account.name || (email ? email.split('@')[0] : 'User'));
    setIsAuthenticated(true);
    setActivePage('home');
    return null;
  };

  const handleSignup = (name, email, password) => {
    if (!name || !email || !password) {
      return 'Please complete all fields.';
    }

    if (users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
      return 'An account already exists with this email.';
    }

    const newUser = { name, email, password };
    setUsers((current) => [...current, newUser]);
    setUserName(name || (email ? email.split('@')[0] : 'User'));
    setIsAuthenticated(true);
    setActivePage('home');
    return null;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowSignup(false);
    setUserName('');
    setActivePage('home');
  };

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'departments':
        return <Departments />;
      case 'appointments':
        return <AppointmentPage />;
      case 'home':
      default:
        return <Home userName={userName} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {isAuthenticated ? (
        <>
          <HeaderNav
            activePage={activePage}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            userName={userName}
          />
          <main className="pb-16">{renderPage()}</main>
          <AppFooter />
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
