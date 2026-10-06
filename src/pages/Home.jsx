import Hero from '../components/Hero'
import { Strip, AboutSection } from '../components/About'
import { WhyUs } from '../components/Programs'
import { Testimonials } from '../components/Community'
import { CtaBanner } from '../components/Contact'

export default function Home() {
  return (<><Hero /><Strip /><AboutSection /><WhyUs /><Testimonials /><CtaBanner /></>)
}
