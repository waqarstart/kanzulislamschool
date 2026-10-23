import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { AboutSection } from '../components/About'
import { PrincipalMessage, CoreValues } from '../components/Principal'
import { CtaBanner } from '../components/Contact'

export default function About() {
  usePageMeta('About Us | Kanz-ul-Islam Beacon Model School', 'Learn about our school, principal message and core values.')
  return (<><PageHeader title="About Our School" text="Knowledge, character and confidence, guided by Islamic values." action={<Link to="/know-more-about-us" className="btn mt-6 inline-flex rounded border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-navy">Know More About Us</Link>} /><AboutSection /><PrincipalMessage /><CoreValues /><CtaBanner /></>)
}
