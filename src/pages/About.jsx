import PageHeader from '../components/PageHeader'
import { AboutSection } from '../components/About'
import { PrincipalMessage, CoreValues } from '../components/Principal'
import { CtaBanner } from '../components/Contact'

export default function About() {
  return (<><PageHeader title="About Our School" text="Knowledge, character and confidence, guided by Islamic values." /><AboutSection /><PrincipalMessage /><CoreValues /><CtaBanner /></>)
}
