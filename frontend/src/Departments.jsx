import React from 'react';

const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    desc: 'Heart and vascular diseases, advanced interventions.',
    img: 'https://images.unsplash.com/photo-1580281657521-6f4b2b7bd0d8?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    desc: 'Stroke, epilepsy, migraine, and Parkinson\'s care.',
    img: 'https://images.unsplash.com/photo-1586773860416-7c0f5cb5f0a0?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    desc: 'Joint replacement, sports injuries, and spine surgery.',
    img: 'https://images.unsplash.com/photo-1584467735875-2d5f0e5b1a6b?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    desc: 'Child health, vaccinations, and developmental care.',
    img: 'https://images.unsplash.com/photo-1584466977778-7f3f6b6f9d1b?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    desc: 'Skin disorders, laser treatments, and acne care.',
    img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    desc: "Women's health, maternity, and fertility services.",
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'dentist',
    name: 'Dentist',
    desc: 'Dental implants, braces, root canals, and oral hygiene.',
    img: 'https://images.unsplash.com/photo-1588774069150-1b3d9b8b7f7e?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'eye',
    name: 'Eye Center',
    desc: 'Cataract surgery, LASIK, glaucoma treatment, and vision therapy.',
    img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60'
  }
];

export default function Departments() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900">Our Specialized Departments</h1>
          <p className="text-slate-600 mt-1">Comprehensive care across specialty areas.</p>
        </header>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <article
              key={d.id}
              className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-200"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-900">{d.name}</h3>
                <p className="text-slate-600 mt-2">{d.desc}</p>
                <div className="mt-4">
                  <button className="inline-block px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
