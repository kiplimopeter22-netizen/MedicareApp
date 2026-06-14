import { useState } from 'react';

export default function LoginPage({ onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
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
          <h1 className="mt-4 text-4xl font-semibold text-text">Welcome back.</h1>
          <p className="mt-2 text-slate-600">Sign in to access your secure healthcare dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-primary px-5 py-3 text-base font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submitted}
          >
            {submitted ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            New to Medicare?{' '}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="font-semibold text-accent underline transition hover:text-primary"
            >
              Create an account
            </button>
          </p>
          <p className="mt-3">Secure login built for Medicare users.</p>
        </div>
      </section>
    </main>
  );
}
