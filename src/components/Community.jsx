import { useState } from 'react'
import Heading from './Heading'

const voices = [['Mrs. Ayesha Khan', 'Parent · Sample testimonial', 'The teachers take time to understand each child. We have seen our daughter become more confident, responsible and excited about learning.'], ['Ahmed Raza', 'Student · Sample testimonial', 'I enjoy that there is always something new to explore, from science activities to sports. My teachers encourage me to keep trying.'], ['Sara Ali', 'Alumni · Sample testimonial', 'The values and discipline I learned here continue to guide me. The school gave me a strong academic base and belief in myself.']]
const faqs = [['When do admissions open?', 'Admissions open every year before the new session. Contact the school office for exact dates.'], ['What documents are required?', 'Birth certificate (B-Form), previous school result card, passport-size photos and parents’ CNIC copies.'], ['Is an assessment part of admission?', 'Yes. An age-appropriate interaction or assessment helps us understand each learner and place them in the right academic level.']]

export function Testimonials() {
  const [open, setOpen] = useState(2)
  return (
    <>
<section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Heading eyebrow="What our community says" title="Voices From Our Community" center />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {voices.map(([n, r, q]) => (
              <figure key={n} className="bg-white rounded-lg p-7 shadow-sm">
                <div className="text-4xl text-gold leading-none">“</div>
                <blockquote className="mt-2 text-slate-600">{q}</blockquote>
                <figcaption className="mt-6 pt-4 border-t flex items-center gap-3"><span className="h-9 w-9 rounded-full bg-brand/20" /><span><b className="block text-sm text-navy">{n}</b><span className="text-xs text-slate-400">{r}</span></span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export function Faq() {
  const [open, setOpen] = useState(2)
  return (
    <>
<section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12">
          <Heading eyebrow="Admissions FAQ" title="Questions From Parents" text="Everything you need to take the next step with confidence." />
          <div className="divide-y border-y">
            {faqs.map(([q, a], i) => (
              <div key={q}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between py-5 text-left font-semibold text-navy">{q}<span>{open === i ? '⌃' : '⌄'}</span></button>
                {open === i && <p className="pb-5 text-slate-500">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}

