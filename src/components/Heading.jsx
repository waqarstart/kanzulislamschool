export default function Heading({ eyebrow, title, text, dark, center }) {
  return (
    <div className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-xl'}>
      <div className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-gold ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gold" />{eyebrow}
      </div>
      <h2 className={`mt-3 text-3xl md:text-4xl font-bold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-3 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>}
    </div>
  )
}
