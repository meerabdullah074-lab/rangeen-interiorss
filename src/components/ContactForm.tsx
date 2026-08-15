"use client";

import { useState, FormEvent } from "react";
import { business } from "@/lib/site-data";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[\d\s+\-()]{7,}$/.test(values.phone)) e.phone = "Enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <h3 className="heading-md mb-2">Thank you, {values.name.split(" ")[0]}!</h3>
        <p className="text-charcoal/60">
          Your enquiry has been received. Our team will contact you shortly — or reach us
          directly on WhatsApp for a faster response.
        </p>
        <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-8 space-y-5">
      <div>
        <label className="text-sm font-medium mb-1 block">Full Name *</label>
        <input
          type="text"
          value={values.name}
          onChange={(ev) => setValues({ ...values, name: ev.target.value })}
          className="w-full rounded-xl border border-charcoal/15 px-4 py-3 outline-none focus:border-gold transition-colors"
          placeholder="Your name"
        />
        {errors.name && <p className="text-terracotta text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium mb-1 block">Phone Number *</label>
          <input
            type="tel"
            value={values.phone}
            onChange={(ev) => setValues({ ...values, phone: ev.target.value })}
            className="w-full rounded-xl border border-charcoal/15 px-4 py-3 outline-none focus:border-gold transition-colors"
            placeholder="03XX XXXXXXX"
          />
          {errors.phone && <p className="text-terracotta text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Email (optional)</label>
          <input
            type="email"
            value={values.email}
            onChange={(ev) => setValues({ ...values, email: ev.target.value })}
            className="w-full rounded-xl border border-charcoal/15 px-4 py-3 outline-none focus:border-gold transition-colors"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-terracotta text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Service Interested In</label>
        <select
          value={values.service}
          onChange={(ev) => setValues({ ...values, service: ev.target.value })}
          className="w-full rounded-xl border border-charcoal/15 px-4 py-3 outline-none focus:border-gold transition-colors bg-white"
        >
          <option value="">Select a service</option>
          <option>Home Interior Design</option>
          <option>Office Interior Design</option>
          <option>False Ceiling</option>
          <option>Wallpapers</option>
          <option>Flooring</option>
          <option>Renovation</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Project Details <span className="text-charcoal/40 font-normal">(optional)</span></label>
        <textarea
          rows={4}
          value={values.message}
          onChange={(ev) => setValues({ ...values, message: ev.target.value })}
          className="w-full rounded-xl border border-charcoal/15 px-4 py-3 outline-none focus:border-gold transition-colors"
          placeholder="Tell us about your space and requirements..."
        />
        {errors.message && <p className="text-terracotta text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        Send Enquiry
      </button>
    </form>
  );
}
