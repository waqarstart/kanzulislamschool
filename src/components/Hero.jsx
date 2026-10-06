import { Link } from 'react-router-dom'
import Ph from './Ph'

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy text-white overflow-hidden min-h-screen flex items-center">
      <Ph label="Hero photo: students in class" className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-60 md:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-20 w-full">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-sky font-semibold">
          <span className="h-px w-10 bg-gold" /> KNOWLEDGE · CHARACTER · CONFIDENCE
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight uppercase max-w-2xl">
          Inspiring minds. Building character. <span className="text-sky">Shaping futures.</span>
        </h1>
        <p className="font-urdu text-sky text-lg mt-6 leading-loose">یہی چراغ جلیں گے تو روشنی ہوگی</p>
        <p className="mt-3 max-w-lg text-slate-300 text-lg">At Kanz-ul-Islam Beacon Model School, we nurture knowledge, character and confidence to prepare students for a brighter future.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/admissions" className="btn rounded bg-brand px-6 py-3 font-semibold hover:bg-sky hover:text-navy transition">Apply for Admission</Link>
          <Link to="/about" className="btn rounded border border-white/60 px-6 py-3 font-semibold hover:bg-white hover:text-navy transition">Explore Our School</Link>
        </div>
      </div>
    </section>
  )
}
