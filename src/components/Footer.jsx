import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const cols = [
  ['Quick Links', [['Home', '/'], ['About', '/about'], ['Academics', '/academics'], ['Admissions', '/admissions']]],
  ['Explore', [['Events', '/events'], ['Gallery', '/gallery'], ['Contact', '/contact']]],
]

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3"><img src={logo} alt="logo" className="h-20 w-20 rounded-full bg-white object-contain" /><div className="text-white font-bold leading-tight">Kanz-ul-Islam<div className="text-[10px] tracking-widest text-sky font-normal">BEACON MODEL SCHOOL</div></div></div>
          <p className="mt-4 text-sm">Inspiring young minds through quality education, strong character and a community where every learner can flourish.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}><h4 className="text-xs tracking-widest text-white font-semibold">{h.toUpperCase()}</h4>
            <ul className="mt-4 space-y-2 text-sm">{items.map(([l, to]) => <li key={l}><Link to={to} className="transition-colors duration-300 hover:text-white">{l}</Link></li>)}</ul></div>
        ))}
        <div><h4 className="text-xs tracking-widest text-white font-semibold">CONTACT</h4>
          <ul className="mt-4 space-y-2 text-sm"><li>[School address, City, Pakistan]</li><li>[School phone number]</li><li>[School email address]</li></ul></div>
      </div>
      <div className="border-t border-white/10 py-5 px-5 text-xs flex justify-between mx-auto max-w-7xl"><span>© 2026 Kanz-ul-Islam Beacon Model School</span><span>All Rights Reserved.</span></div>
    </footer>
  )
}
