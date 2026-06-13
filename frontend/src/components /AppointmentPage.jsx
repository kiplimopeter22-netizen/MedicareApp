import React, { useState } from "react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // pretend to send to API
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <header className="p-6 bg-primary text-white">
          <h1 className="text-2xl font-semibold">Book an Appointment</h1>
          <p className="text-sm opacity-90">
            Fast, secure booking with trusted doctors
          </p>
        </header>

        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Patient Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Doctor</label>
              <select
                name="doctor"
                value={form.doctor}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Any available</option>
                <option>Dr. Amina Noor — Cardiology</option>
                <option>Dr. Kareem Ali — Pediatrics</option>
                <option>Dr. Laila Hassan — General</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 h-24"
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between">
              <div>
                <button className="bg-primary text-white px-4 py-2 rounded">
                  Book Appointment
                </button>
              </div>
              {submitted && (
                <div className="text-green-600">
                  Appointment requested — we will contact you.
                </div>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
