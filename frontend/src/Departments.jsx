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

function DeptIcon({ id }){
  switch(id){
    case 'cardiology':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6.716-4.35-9.071-7.03C-0.573 9.48 3.5 4 8 6c2.5 1.2 3.5 4 4 4s1.5-2.8 4-4c4.5-2 8.573 3.48 5.071 7.97C18.716 16.65 12 21 12 21z" fill="#ef4444" />
        </svg>
      )
    case 'neurology':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a7 7 0 0 0-7 7v3a4 4 0 0 0 4 4h1v3l3-2 3 2v-3h1a4 4 0 0 0 4-4V9a7 7 0 0 0-7-7z" fill="#6366f1" />
        </svg>
      )
    case 'orthopedics':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v10M8 14l4 4 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'pediatrics':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" fill="#f59e0b" />
          <path d="M6 18c0-3 6-4 6-4s6 1 6 4v1H6v-1z" fill="#fbbf24" />
        </svg>
      )
    case 'dermatology':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c3 0 6 2 6 6 0 6-6 10-6 10s-6-4-6-10c0-4 3-6 6-6z" fill="#f97316" />
        </svg>
      )
    case 'gynecology':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" fill="#ec4899" />
          <path d="M12 11v6M9 18h6" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'dentist':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c3 0 4 1 4 3s.5 6-4 9c-4.5-3-4-7-4-9s1-3 4-3z" fill="#60a5fa" />
        </svg>
      )
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="#06b6d4" />
          <circle cx="12" cy="12" r="2.5" fill="#0369a1" />
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
              <div className="w-full h-full p-6"> 
                <DeptIcon id={d.id} />
              </div>
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
