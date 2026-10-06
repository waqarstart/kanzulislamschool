import Heading from './Heading'
import Ph from './Ph'

const strip = [['📘', 'Quality Education'], ['👩‍🏫', 'Experienced Faculty'], ['💻', 'Modern Learning'], ['🌱', 'Student Development']]

export function Strip() {
  return (
    <>
<div className="bg-white border-b">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x text-center">
          {strip.map(([i, t]) => <div key={t} className="py-6 text-navy font-semibold"><span className="mr-2">{i}</span>{t}</div>)}
        </div>
      </div>
      
    </>
  )
}

export function AboutSection() {
  return (
    <>
<section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-14 items-center">
          <Ph label="Classroom photo" className="h-96 rounded-lg" />
          <div>
            <Heading eyebrow="About our school" title="Where Education Meets Character" />
            <p className="mt-5 text-slate-600 leading-relaxed">Kanz-ul-Islam Beacon Model School combines strong academics with Islamic values and modern computer education. Every child is guided to learn with curiosity, act with integrity and grow with confidence.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Like a beacon, we aim to light the way for our students and our community.</p>
          </div>
        </div>
      </section>
    
    </>
  )
}

