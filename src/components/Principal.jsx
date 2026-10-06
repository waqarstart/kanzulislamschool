import Heading from './Heading'
import Ph from './Ph'

const values = ['Knowledge', 'Character', 'Discipline', 'Respect', 'Confidence', 'Responsibility']

export function PrincipalMessage() {
  return (
    <>
<section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2">
          <Ph label="Principal photo (editable)" className="h-80 md:h-auto min-h-[320px]" />
          <div className="p-10 md:p-16">
            <div className="text-gold text-xs tracking-[0.2em] font-semibold">PRINCIPAL'S MESSAGE</div>
            <p className="mt-5 text-xl leading-relaxed text-slate-200">“We create an environment where every child feels secure, inspired, and ready to learn. Our commitment is to academic excellence grounded in character, compassion, and purpose.”</p>
            <div className="mt-6 border-l-2 border-gold pl-4"><div className="font-semibold">[Principal Name]</div><div className="text-sm text-slate-400">Principal</div></div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export function CoreValues() {
  return (
    <>
<section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-10 items-center">
          <Heading eyebrow="Our core values" title="Principles that guide every learner" />
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 border-t border-l">
            {values.map(v => <div key={v} className="border-b border-r p-6 font-semibold text-navy hover:bg-cream transition">◆ {v}</div>)}
          </div>
        </div>
      </section>
    
    </>
  )
}

