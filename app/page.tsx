import Welcome from '@/components/welcome'
import styles from './page.module.scss'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Welcome/>
    </div>
  )
}
