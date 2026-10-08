import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { ContactSection } from '../components/Contact'

export default function Contact() {
  usePageMeta('Contact Us | Kanz-ul-Islam Beacon Model School', 'Get in touch with Kanz-ul-Islam Beacon Model School.')
  return (<><PageHeader title="Contact Us" text="We would be pleased to hear from you." /><ContactSection /></>)
}
