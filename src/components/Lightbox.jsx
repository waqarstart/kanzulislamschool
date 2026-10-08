import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Ph from './Ph'

const Chevron = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const btn = 'flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-navy'

export default function Lightbox({ items, index, onClose, onChange }) {
  const n = items.length
  const prev = () => onChange((index - 1 + n) % n)
  const next = () => onChange((index + 1) % n)
  useEffect(() => {
    const key = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', key)
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = old }
  })
  const [, label, src] = items[index]
  return createPortal(
    <div className="lb-in fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4 backdrop-blur" onClick={onClose} role="dialog" aria-modal="true" aria-label={label}>
      <button onClick={onClose} aria-label="Close" className={`${btn} absolute right-5 top-5`}><Chevron d="M6 6l12 12M18 6L6 18" /></button>
      <button onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous" className={`${btn} absolute left-3 md:left-8`}><Chevron d="M15 6l-6 6 6 6" /></button>
      <button onClick={e => { e.stopPropagation(); next() }} aria-label="Next" className={`${btn} absolute right-3 md:right-8`}><Chevron d="M9 6l6 6-6 6" /></button>
      <figure className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        {src ? <img src={src} alt={label} className="max-h-[75vh] w-full rounded-lg object-contain" /> : <Ph label={label} className="h-[60vh] w-full rounded-lg text-base" />}
        <figcaption className="mt-4 flex justify-between text-sm text-slate-300"><span>{label}</span><span>{index + 1} / {n}</span></figcaption>
      </figure>
    </div>,
    document.body
  )
}
