import Welcome from '@/components/welcome'
import styles from './page.module.scss'
import Header from '@/components/header'
import Features from '@/components/features'
import Contato from '@/components/contato'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Welcome/>
      <Features/>
      <Contato/>
    </div>
  )
}
