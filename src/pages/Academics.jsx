import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import { ProgramsList, WhyUs } from '../components/Programs'
import { CtaBanner } from '../components/Contact'

export default function Academics() {
  usePageMeta('Academics | Kanz-ul-Islam Beacon Model School', 'Programs from Early Years to Secondary school.')
  return (<><PageHeader title="Academics" text="Programs for every stage, from Early Years to Secondary." /><ProgramsList /><WhyUs /><CtaBanner /></>)
}
