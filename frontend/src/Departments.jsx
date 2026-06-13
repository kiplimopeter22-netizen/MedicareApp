import React, { useState, useEffect } from 'react'

const departments = [
  { id: 'cardiology', name: 'Cardiology', desc: 'Heart and vascular diseases, advanced interventions.' },
  { id: 'neurology', name: 'Neurology', desc: "Stroke, epilepsy, migraine, and Parkinson's care." },
  { id: 'orthopedics', name: 'Orthopedics', desc: 'Joint replacement, sports injuries, and spine surgery.' },
  { id: 'pediatrics', name: 'Pediatrics', desc: 'Child health, vaccinations, and developmental care.' },
  { id: 'dermatology', name: 'Dermatology', desc: 'Skin disorders, laser treatments, and acne care.' },
  { id: 'gynecology', name: 'Gynecology', desc: "Women's health, maternity, and fertility services." },
  { id: 'dentist', name: 'Dentist', desc: 'Dental implants, braces, root canals, and oral hygiene.' },
  { id: 'eye', name: 'Eye Center', desc: 'Cataract surgery, LASIK, glaucoma treatment, and vision therapy.' }
]

function DeptPerson({ id }){
  const common = { width: '100%', height: '100%', viewBox: '0 0 120 80' }
  switch(id){
    case 'cardiology':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#fff7f7" />
          <circle cx="36" cy="36" r="18" fill="#fee2e2" />
          <path d="M26 48c6-6 20-6 26 0" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M44 34c0 4-4 6-8 6s-8-2-8-6 4-8 8-8 8 4 8 8z" fill="#ef4444" />
        </svg>
      )
    case 'neurology':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#f3f4ff" />
          <circle cx="36" cy="36" r="18" fill="#eef2ff" />
          <path d="M30 36c4-10 16-10 20 0" stroke="#4f46e5" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="36" cy="36" r="4" fill="#4f46e5" />
        </svg>
      )
    case 'orthopedics':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#f0fdf4" />
          <circle cx="36" cy="36" r="18" fill="#ecfdf5" />
          <path d="M28 44c6-6 20-6 26 0" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M46 30l6 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'pediatrics':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#fff7ed" />
          <circle cx="36" cy="36" r="18" fill="#fffbeb" />
          <circle cx="36" cy="33" r="5" fill="#f59e0b" />
          <path d="M24 50c6-6 24-6 32 0" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'dermatology':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#fff7ed" />
          <circle cx="36" cy="36" r="18" fill="#fff1f0" />
          <path d="M30 36c4-6 16-6 20 0" stroke="#fb923c" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'gynecology':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#fff0f6" />
          <circle cx="36" cy="36" r="18" fill="#fff1f2" />
          <path d="M36 28v16" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'dentist':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#eff6ff" />
          <circle cx="36" cy="36" r="18" fill="#f0f9ff" />
          <path d="M30 36c4-6 16-6 20 0" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'eye':
      return (
        <svg {...common} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="10" fill="#ecfeff" />
          <circle cx="36" cy="36" r="18" fill="#f0fdfa" />
          <path d="M10 36s8-12 26-12 26 12 26 12-8 12-26 12S10 36 10 36z" fill="#06b6d4" opacity="0.2" />
          <circle cx="36" cy="36" r="4" fill="#0369a1" />
        </svg>
      )
    default:
      return null
  }
}

export default function Departments(){
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-slate-900">Our Specialized Departments</h1>
        <p className="mt-2 text-slate-600">Comprehensive care across specialty areas.</p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map(d => (
          <article key={d.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
              {d.img ? (
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Unavailable'; }}
                  className="w-full h-full object-cover object-center max-h-40 sm:max-h-48"
                />
              ) : (
                <div className="w-full h-full p-6">
                  <DeptIcon id={d.id} />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-900">{d.name}</h3>
              <p className="mt-2 text-slate-600">{d.desc}</p>
              <div className="mt-4">
                <button
                  onClick={() => setSelected(d)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Learn more
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative z-10 max-w-2xl w-full mx-4 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{selected.name}</h2>
              <p className="mt-3 text-slate-600">{selected.desc}</p>
              <div className="mt-6 flex gap-2 justify-end">
                <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
