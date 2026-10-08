import usePageMeta from '../hooks/usePageMeta'
import Hero from '../components/Hero'
import { Strip, AboutSection } from '../components/About'
import { WhyUs } from '../components/Programs'
import { Testimonials } from '../components/Community'
import { CtaBanner } from '../components/Contact'

export default function Home() {
  usePageMeta('Kanz-ul-Islam Beacon Model School | Inspiring Minds, Building Character', 'Kanz-ul-Islam Beacon Model School nurtures knowledge, character and confidence to prepare students for a brighter future.')
  return (<><Hero /><Strip /><AboutSection /><WhyUs /><Testimonials /><CtaBanner /></>)
}
