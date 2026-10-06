import { Link } from 'react-router-dom'
import Heading from './Heading'
import Ph from './Ph'

const why = [['Quality Education', 'Strong curriculum with focus on understanding, not rote learning.'], ['Experienced Faculty', 'Caring teachers who know every student by name.'], ['Modern Learning', 'Engaging classrooms and a computer lab where technology supports learning.'], ['Sports & Activities', 'Opportunities that build teamwork, confidence and creativity.'], ['Safe & Supportive', 'A respectful environment where every student belongs.'], ['Islamic Values', 'Character and manners taught alongside academics.']]
const programs = [['Early Years', 'A joyful beginning built around discovery, play and confident first steps.'], ['Primary School', 'Strong foundations in literacy, numeracy, curiosity and good character.'], ['Middle School', 'Growing independence through inquiry, collaboration and wider learning.'], ['Secondary School', 'Focused preparation for academic success and life beyond school.']]

export function WhyUs() {
  return (
    <>
<section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Heading eyebrow="Why choose us" title="A school that cares about the whole child" center />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {why.map(([t, d], i) => (
              <div key={t} className="bg-white rounded-lg p-7 shadow-sm hover:shadow-md transition">
                <div className="text-xs text-slate-300 text-right">0{i + 1}</div>
                <h3 className="mt-2 font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export function ProgramsList() {
  return (
    <>
<section id="academics" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Heading eyebrow="Academics" title="Programs for every stage" center />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map(([t, d]) => (
              <div key={t} className="rounded-lg border bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition">
                <Ph label={t} className="h-40" />
                <div className="p-5"><h3 className="font-bold text-navy">{t}</h3><p className="mt-2 text-sm text-slate-500">{d}</p><Link to="/admissions" className="link-slide mt-4 inline-block text-sm font-semibold text-brand">Explore Program →</Link></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}

