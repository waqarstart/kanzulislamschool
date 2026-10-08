import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { AboutSection } from '../components/About'
import { PrincipalMessage, CoreValues } from '../components/Principal'
import { CtaBanner } from '../components/Contact'

export default function About() {
  usePageMeta('About Us | Kanz-ul-Islam Beacon Model School', 'Learn about our school, principal message and core values.')
  return (<><PageHeader title="About Our School" text="Knowledge, character and confidence, guided by Islamic values." /><AboutSection /><PrincipalMessage /><CoreValues /><CtaBanner /></>)
}
