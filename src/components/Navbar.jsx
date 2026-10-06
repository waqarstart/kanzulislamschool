import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const links = [['Home', '/'], ['About', '/about'], ['Academics', '/academics'], ['Admissions', '/admissions'], ['Events', '/events'], ['Gallery', '/gallery'], ['Contact', '/contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const linkCls = ({ isActive }) =>
    `relative py-1 transition-colors duration-300 hover:text-gold after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-gold after:origin-center after:transition-transform after:duration-300 after:ease-out ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'} ${scrolled ? 'text-navy' : 'text-white'}`
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'bg-white/95 shadow backdrop-blur' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-5 h-[88px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="KIBMS logo" className="h-16 w-16 rounded-full bg-white object-contain shadow" />
          <div className="leading-tight">
            <div className={`font-bold ${scrolled ? 'text-navy' : 'text-white'}`}>Kanz-ul-Islam</div>
            <div className={`text-[10px] tracking-[0.15em] ${scrolled ? 'text-slate-500' : 'text-sky'}`}>BEACON MODEL SCHOOL</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map(([l, to]) => <NavLink key={l} to={to} end={to === '/'} className={linkCls}>{l}</NavLink>)}
        </nav>
        <button onClick={() => setOpen(!open)} className={`lg:hidden text-2xl ${scrolled ? 'text-navy' : 'text-white'}`} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t px-5 py-3 flex flex-col gap-3">
          {links.map(([l, to]) => <NavLink key={l} to={to} end={to === '/'} onClick={() => setOpen(false)} className="text-navy font-medium">{l}</NavLink>)}
        </div>
      )}
    </header>
  )
}
