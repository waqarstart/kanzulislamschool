import usePageMeta from '../hooks/usePageMeta'
import gcsLogo from '../assets/gcs.png'
import cmcLogo from '../assets/cmd.gif'
import tekkdevLogo from '../assets/tekdev.jpg'
import transitLogo from '../assets/mastransit.png'
import safeCityLogo from '../assets/safe city.png'

const NODES = [
  { id: 'p1', label: 'GCS', x: 260, y: 65 },
  { id: 'p2', label: 'CMC', x: 440.7, y: 179 },
  { id: 'p3', label: 'Tekkdev', x: 371.7, y: 363.5 },
  { id: 'p4', label: 'Transit', x: 148.3, y: 363.5 },
  { id: 'p5', label: 'Safe Cities', x: 79.3, y: 179 },
]

const companies = [
  { name: 'GCS Pvt. Ltd.', detail: 'Corporate scale and integrated solutions', href: 'https://gcspvt.com/', logo: gcsLogo, alt: 'GCS logo' },
  { name: 'Computer Marketing Company', detail: 'Mission critical hardware and networks', href: 'https://www.cmc.com.pk/', logo: cmcLogo, alt: 'Computer Marketing Company logo' },
  { name: 'Tekkdev', detail: 'Agile software and digital intelligence', href: 'https://www.tekkdev.com/', logo: tekkdevLogo, alt: 'Tekkdev logo' },
  { name: 'Transport and Mass Transit', detail: 'Connected public transport systems', href: 'https://pma.punjab.gov.pk/', logo: transitLogo, alt: 'Punjab Mass Transit logo' },
  { name: 'Safe Cities', detail: 'Technology for safer, smarter cities', href: 'https://psca.gop.pk/', logo: safeCityLogo, alt: 'Punjab Safe Cities Authority logo' },
]

function Network() {
  return (
    <svg className="mx-auto block h-auto w-full max-w-md overflow-visible md:ml-auto md:mr-0" viewBox="0 0 520 460" role="img" aria-label="Network diagram: GCS, CMC, Tekkdev, Transport and Mass Transit, and Safe Cities connected through one shared hub">
      <ellipse cx="260" cy="230" rx="190" ry="165" fill="none" stroke="#315987" strokeDasharray="3 7" />
      <ellipse cx="260" cy="230" rx="120" ry="104" fill="none" stroke="#315987" strokeDasharray="3 7" />
      <g fill="none">
        {NODES.map(n => (
          <path key={n.id} id={`wwa-${n.id}`} pathLength="1" d={`M260 230 L${n.x} ${n.y}`} stroke="#8fb8f0" strokeWidth="1.6" strokeDasharray="1" strokeDashoffset="1">
            <animate attributeName="stroke-dashoffset" from="1" to="0" begin="0.2s" dur="1.4s" fill="freeze" />
          </path>
        ))}
      </g>
      <g>
        {NODES.map((n, index) => (
          <circle key={n.id} r="4" fill="#b8913f">
            <animateMotion dur="3.2s" begin={`${1.6 + index * 0.6}s`} repeatCount="indefinite"><mpath href={`#wwa-${n.id}`} /></animateMotion>
          </circle>
        ))}
      </g>
      {NODES.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="36" fill="#ffffff" stroke="#8fb8f0" strokeWidth="4" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#0a1f44" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600">{n.label}</text>
        </g>
      ))}
      <g>
        <circle cx="260" cy="230" r="52" fill="#8fb8f0"><animate attributeName="r" values="46;62;46" dur="3s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.35;0.05;0.35" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="260" cy="230" r="44" fill="#ffffff" stroke="#8fb8f0" strokeWidth="6" />
        <text x="260" y="236" textAnchor="middle" fill="#0a1f44" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700">Connected</text>
      </g>
    </svg>
  )
}

export default function KnowMoreAboutUs() {
  usePageMeta('Who We Are | Connected Technology Ecosystem', 'Meet the GCS, CMC, Tekkdev, Transport and Mass Transit, and Safe Cities ecosystem.')

  return (
    <div className="bg-white font-sans text-slate-700">
      <section data-noreveal className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-8">
          <div>
            <h1 className="mt-6 text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">Who we <em className="not-italic text-sky">are</em>?</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"><strong className="font-semibold text-white">We are an interconnected ecosystem of technology innovators, built to future-proof your organizational infrastructure from the ground up.</strong> By blending the massive corporate scale of the <a className="text-sky underline underline-offset-4 hover:text-white" href="https://gcspvt.com/" target="_blank" rel="noreferrer">GCS Head Office</a>, the mission-critical hardware and network deployment of <a className="text-sky underline underline-offset-4 hover:text-white" href="https://pk.linkedin.com/company/cmcpltd" target="_blank" rel="noreferrer">Computer Marketing Company (CMC)</a>, and the agile software intelligence of Tekkdev, we deliver seamless, end-to-end technology solutions.</p>
          </div>
          <Network />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20" aria-labelledby="companies-title">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold"><span className="h-px w-8 bg-gold" />Our companies</div>
            <h2 id="companies-title" className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">A network of specialists</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-500">The companies and public-sector systems that make up the ecosystem.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map(company => (
              <a key={company.name} href={company.href} target="_blank" rel="noreferrer" className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-3 pb-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                <div className="flex h-44 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-5"><img className="h-full w-full object-contain" src={company.logo} alt={company.alt} /></div>
                <div className="flex flex-1 flex-col px-3 pt-5">
                  <h3 className="text-xl font-bold tracking-tight text-navy">{company.name}</h3>
                  <p className="mt-2 text-slate-500">{company.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Visit website <span className="grid h-7 w-7 place-items-center rounded-full bg-sky/30 text-navy transition-transform group-hover:rotate-45">↗</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
