import { Link } from 'react-router-dom'
import { useState } from 'react'
import Heading from './Heading'

const icons = {
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
}
const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>
)
const info = [['pin', 'Visit Us', '[School address, City, Pakistan]'], ['phone', 'Call Us', '[School phone number]'], ['mail', 'Email Us', '[School email address]'], ['clock', 'Office Hours', '[School office hours]']]
const subjects = ['Admissions', 'Fee Structure', 'General Inquiry', 'Other']

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setForm({ ...form, [k]: e.target.value })
  const submit = e => { e.preventDefault(); console.log('Inquiry submitted:', form); setSent(true) }
  const field = 'mt-2 w-full rounded border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-brand'
  const label = 'block text-sm font-semibold text-navy'
  return (
    <>
<section id="contact" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading eyebrow="Contact our school" title="Let’s Connect" text="We would be pleased to answer your questions and help your family learn more about our school." />
            <div className="mt-8 border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm text-slate-600">Editable placeholders — replace the details below with the school’s verified contact information.</div>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {info.map(([i, t, d]) => (
                <div key={t} className="flex gap-3"><Icon name={i} /><div><div className="font-semibold text-navy">{t}</div><div className="text-sm text-slate-500">{d}</div></div></div>
              ))}
            </div>
            <div className="mt-10 h-56 rounded bg-slate-200 flex items-center justify-center" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #dde3ea 0 20px, #e8edf2 20px 40px)' }}>
              <div className="bg-white shadow px-8 py-5 text-center">
                <Icon name="pin" />
                <div className="mt-1 font-semibold text-navy text-sm">Kanz-ul-Islam Beacon Model School</div>
                <div className="text-xs text-slate-400">Interactive map placeholder</div>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="bg-white shadow-lg p-8 md:p-10">
            <div className="text-xs tracking-[0.2em] font-semibold text-brand">SEND AN INQUIRY</div>
            <h3 className="mt-3 text-3xl font-semibold text-navy">How can we help?</h3>
            {sent ? <p className="mt-8 font-semibold text-brand">Thank you! We will get back to you soon.</p> : (
              <div className="mt-8 space-y-5">
                <label className={label}>Full Name<input required className={field} value={form.name} onChange={set('name')} placeholder="Your full name" /></label>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className={label}>Email<input type="email" className={field} value={form.email} onChange={set('email')} placeholder="name@email.com" /></label>
                  <label className={label}>Phone<input required className={field} value={form.phone} onChange={set('phone')} placeholder="+92" /></label>
                </div>
                <label className={label}>Subject
                  <select className={field} value={form.subject} onChange={set('subject')}>
                    <option value="">Select a subject</option>
                    {subjects.map(s => <option key={s}>{s}</option>)}
                  </select>
                </label>
                <label className={label}>Message<textarea rows="5" className={field} value={form.message} onChange={set('message')} placeholder="Tell us how we can help..." /></label>
                <button className="btn w-full rounded bg-brand py-4 font-semibold text-white hover:bg-navy transition">Send Message →</button>
              </div>
            )}
          </form>
        </div>
      </section>
      
    </>
  )
}

export function CtaBanner() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setForm({ ...form, [k]: e.target.value })
  const submit = e => { e.preventDefault(); console.log('Inquiry submitted:', form); setSent(true) }
  const field = 'mt-2 w-full rounded border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-brand'
  const label = 'block text-sm font-semibold text-navy'
  return (
    <>
<section className="bg-brand text-white py-16">
        <div className="mx-auto max-w-7xl px-5 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Give Your Child a Stronger Start</h2>
            <p className="mt-2 text-blue-100">Join our community focused on learning, character and growth.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admissions" className="btn rounded bg-white text-brand px-6 py-3 font-semibold">Apply Now →</Link>
            <Link to="/contact" className="btn rounded border border-white/60 px-6 py-3 font-semibold">Contact Us →</Link>
          </div>
        </div>
      </section>
    
    </>
  )
}

