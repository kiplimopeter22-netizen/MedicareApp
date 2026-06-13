import React from 'react'

const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    desc: 'Heart and vascular diseases, advanced interventions.',
    img: 'https://source.unsplash.com/1400x900/?cardiology,heart,hospital'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    desc: "Stroke, epilepsy, migraine, and Parkinson's care.",
    img: 'https://source.unsplash.com/1400x900/?neurology,brain,neuroscience'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    desc: 'Joint replacement, sports injuries, and spine surgery.',
    img: 'https://source.unsplash.com/1400x900/?orthopedics,orthopedic,surgery'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    desc: 'Child health, vaccinations, and developmental care.',
    img: 'https://source.unsplash.com/1400x900/?pediatrics,children,pediatrics'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    desc: 'Skin disorders, laser treatments, and acne care.',
    img: 'https://source.unsplash.com/1400x900/?dermatology,skin,dermatology'
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    desc: "Women's health, maternity, and fertility services.",
    img: 'https://source.unsplash.com/1400x900/?gynecology,maternity,women'
  },
  {
    id: 'dentist',
    name: 'Dentist',
    desc: 'Dental implants, braces, root canals, and oral hygiene.',
    img: 'https://source.unsplash.com/1400x900/?dentist,dental,teeth'
  },
  {
    id: 'eye',
    name: 'Eye Center',
    desc: 'Cataract surgery, LASIK, glaucoma treatment, and vision therapy.',
    img: 'https://source.unsplash.com/1400x900/?eye,ophthalmology,vision'
  }
]

export default function Departments(){
  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-slate-900">Our Specialized Departments</h1>
        <p className="mt-2 text-slate-600">Comprehensive care across specialty areas.</p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map(d => (
          <article key={d.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Image+Unavailable'; }}
                className="w-full h-full object-cover transform hover:scale-105 transition"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-900">{d.name}</h3>
              <p className="mt-2 text-slate-600">{d.desc}</p>
              <div className="mt-4">
                <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Learn more</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
