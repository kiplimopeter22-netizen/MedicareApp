import { useState } from 'react';

export default function SignupPage({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please complete all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitted(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(false);
    setError('');
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Medicare</p>
          <h1 className="mt-4 text-4xl font-semibold text-text">Create your account.</h1>
          <p className="mt-2 text-slate-600">Sign up to manage your Medicare dashboard securely.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Confirm your password"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-primary px-5 py-3 text-base font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submitted}
          >
            {submitted ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="font-semibold text-accent underline transition hover:text-primary"
            >
              Sign in
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
