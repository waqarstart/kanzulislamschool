import { Link } from 'react-router-dom'
import { useState } from 'react'
import Heading from './Heading'
import Ph from './Ph'

const life = ['Classrooms', 'Sports', 'Student Activities']
const events = [['SCHOOL EVENT', '18 March 2026', 'Annual Science & Innovation Exhibition', 'Students present imaginative solutions, working models and experiments.'], ['STUDENT LIFE', '08 March 2026', 'Inter-House Sports Championship', 'A spirited celebration of teamwork, resilience and participation.'], ['ACADEMICS', '25 February 2026', 'Young Readers Celebration Week', 'A week of storytelling, reading circles and creative activities.']]
const tabs = ['All', 'Events', 'Classrooms', 'Sports', 'Activities']
const gallery = [['Events', 'Annual Day'], ['Classrooms', 'Class 3'], ['Sports', 'Basketball'], ['Activities', 'Art Class'], ['Events', 'Science Fair'], ['Classrooms', 'Computer Lab'], ['Sports', 'Race Day'], ['Activities', 'Reading Week']]

export function SchoolLifeSection() {
  const [tab, setTab] = useState('All')
  const shown = gallery.filter(([c]) => tab === 'All' || c === tab)
  return (
    <>
<section id="school-life" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Heading eyebrow="Beyond the classroom" title="A School Life Full of Discovery" text="Students grow through experiences that spark curiosity, build friendships and reveal new strengths." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {life.map((l, i) => <div key={l} className="relative group overflow-hidden rounded-lg"><Ph label={l} className="h-72 group-hover:scale-105 transition duration-500" /><div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy/90 text-white font-semibold">0{i + 1} {l}</div></div>)}
          </div>
        </div>
      </section>
      
    </>
  )
}

export function EventsSection() {
  const [tab, setTab] = useState('All')
  const shown = gallery.filter(([c]) => tab === 'All' || c === tab)
  return (
    <>
<section id="events" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Heading eyebrow="News & events" title="Moments From Our School" text="Celebrating learning, participation and the moments that bring our community together." />
            <Link to="/gallery" className="btn rounded border px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition">View All Events →</Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {events.map(([tag, date, title, text]) => (
              <article key={title} className="group">
                <div className="relative overflow-hidden rounded-lg"><Ph label="Event photo" className="h-52 group-hover:scale-105 transition duration-500" /><span className="absolute bottom-3 left-3 bg-brand text-white text-[10px] font-semibold px-2.5 py-1 tracking-wider">{tag}</span></div>
                <div className="mt-4 text-xs font-semibold text-gold tracking-wider">{date.toUpperCase()}</div>
                <h3 className="mt-1 font-bold text-navy text-lg">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{text}</p>
                <Link to="/events" className="link-slide mt-3 inline-block text-sm font-semibold text-brand">Read More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export function GallerySection() {
  const [tab, setTab] = useState('All')
  const shown = gallery.filter(([c]) => tab === 'All' || c === tab)
  return (
    <>
<section id="gallery" className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Heading dark eyebrow="Gallery" title="Our Story in Pictures" />
            <div className="flex gap-2 flex-wrap">
              {tabs.map(t => <button key={t} onClick={() => setTab(t)} className={`btn px-4 py-1.5 rounded-full text-sm transition ${tab === t ? 'bg-white text-navy font-semibold' : 'text-slate-300 hover:text-white'}`}>{t}</button>)}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {shown.map(([c, l], i) => <Ph key={l} label={l} className={`rounded-lg ${i % 5 === 0 ? 'row-span-2 h-[26rem]' : 'h-48'}`} />)}
          </div>
        </div>
      </section>
    
    </>
  )
}

