import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { Faq } from '../components/Community'
import { ContactSection } from '../components/Contact'

export default function Admissions() {
  usePageMeta('Admissions | Kanz-ul-Islam Beacon Model School', 'Admission FAQs and inquiry form for parents.')
  return (<><PageHeader title="Admissions" text="Everything you need to enroll your child with confidence." /><Faq /><ContactSection /></>)
}
