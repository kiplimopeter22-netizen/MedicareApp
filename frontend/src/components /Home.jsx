
import React, { useState } from 'react'
import { Calendar, Phone, Mail, MapPin, Users, Bed, Activity } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Nav */}
      <header className="shadow-sm bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">M</div>
            <h1 className="text-2xl font-bold">Medicare App</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a className="hover:text-primary" href="#">Home</a>
            <a className="hover:text-primary" href="#departments">Departments</a>
            <a className="hover:text-primary" href="#appointment">Appointment</a>
          </nav>

          {/* Mobile nav toggle */}
          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="bg-gradient-to-r from-primary to-accent/30 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Trusted Care at Medicare App</h2>
              <p className="mb-6 text-base md:text-lg">Personalized medical care with advanced technology and compassionate staff.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold">Get Started</button>
                <button className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-full">Contact Us</button>
              </div>
            </div>
            <div>
              <picture>
                <source media="(min-width:1024px)" srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" />
                <source media="(min-width:640px)" srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" alt="hospital" className="rounded-xl shadow-lg w-full object-cover h-56 md:h-80 lg:h-96"/>
              </picture>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Activity className="text-primary" size={20}/></div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm">Emergency Care</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Users className="text-primary" size={20}/></div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm">Expert Doctors</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Bed className="text-primary" size={20}/></div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-sm">Beds Available</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold">Medicare App</h4>
            <p className="text-sm">Your health, our priority.</p>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm flex items-center gap-2"><Phone size={14}/> +1 (888) 123-4567</p>
            <p className="text-sm flex items-center gap-2"><Mail size={14}/> contact@medicareapp.com</p>
          </div>
          <div>
            <h5 className="font-semibold">Hours</h5>
            <p className="text-sm">Emergency: 24/7</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MobileNav(){
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md border">
        <span className="sr-only">Toggle menu</span>
        {open ? '✕' : '☰'}
      </button>
        {open && (
        <div id="mobile-menu" className="absolute right-4 top-20 w-64 bg-white rounded-md shadow-lg py-4">
          <a className="block px-4 py-2 hover:bg-slate-50" href="#">Home</a>
          <a className="block px-4 py-2 hover:bg-slate-50" href="#departments">Departments</a>
          <a className="block px-4 py-2 hover:bg-slate-50" href="#appointment">Appointment</a>
        </div>
      )}
    </div>
  )
}

export default Home

