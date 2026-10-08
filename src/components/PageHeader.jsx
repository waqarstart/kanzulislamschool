export default function PageHeader({ title, text }) {
  return (
    <section data-noreveal className="bg-navy text-white pt-40 pb-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-gold font-semibold"><span className="h-px w-10 bg-gold" />KANZ-UL-ISLAM BEACON MODEL SCHOOL</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-slate-300 text-lg">{text}</p>}
      </div>
    </section>
  )
}
