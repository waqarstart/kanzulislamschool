import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { SchoolLifeSection, EventsSection } from '../components/SchoolLife'
import { CtaBanner } from '../components/Contact'

export default function Events() {
  usePageMeta('School Life & Events | Kanz-ul-Islam Beacon Model School', 'News, events and school life at Kanz-ul-Islam Beacon Model School.')
  return (<><PageHeader title="School Life & Events" text="Moments that bring our community together." /><SchoolLifeSection /><EventsSection /><CtaBanner /></>)
}
