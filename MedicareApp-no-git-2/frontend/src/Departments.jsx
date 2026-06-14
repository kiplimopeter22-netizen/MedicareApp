import React, { useState, useEffect } from 'react'

const departments = [
  { id: 'cardiology', name: 'Cardiology', desc: 'Heart and vascular diseases, advanced interventions.' },
  { id: 'neurology', name: 'Neurology', desc: "Stroke, epilepsy, migraine, and Parkinson's care." },
  { id: 'orthopedics', name: 'Orthopedics', desc: 'Joint replacement, sports injuries, and spine surgery.' },
  { id: 'pediatrics', name: 'Pediatrics', desc: 'Child health, vaccinations, and developmental care.' },
  { id: 'dermatology', name: 'Dermatology', desc: 'Skin disorders, laser treatments, and acne care.' },
  { id: 'gynecology', name: 'Gynecology', desc: "Women's health, maternity, and fertility services." },
  { id: 'dentist', name: 'Dentist', desc: 'Dental implants, braces, root canals, and oral hygiene.' },
  { id: 'eye', name: 'Eye Center', desc: 'Cataract surgery, LASIK, glaucoma treatment, and vision therapy.', img: 'data:image/jpeg;base64,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'}
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

function DeptIcon(props){
  // reuse the DeptPerson illustrations for the small card icons
  return <DeptPerson {...props} />
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
