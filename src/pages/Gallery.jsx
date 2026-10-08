import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { GallerySection } from '../components/SchoolLife'
import { CtaBanner } from '../components/Contact'

export default function Gallery() {
  usePageMeta('Gallery | Kanz-ul-Islam Beacon Model School', 'Photos from our classrooms, sports and events.')
  return (<><PageHeader title="Gallery" text="Our story in pictures." /><GallerySection /><CtaBanner /></>)
}
