import PageHeader from '../components/PageHeader'
import { SchoolLifeSection, EventsSection } from '../components/SchoolLife'
import { CtaBanner } from '../components/Contact'

export default function Events() {
  return (<><PageHeader title="School Life & Events" text="Moments that bring our community together." /><SchoolLifeSection /><EventsSection /><CtaBanner /></>)
}
