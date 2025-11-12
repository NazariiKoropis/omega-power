import AboutHero from '../components/about/AboutHero'
import AboutHistory from '../components/about/AboutHistory'
import AboutContacts from '../components/about/AboutContacts'
import AboutFAQ from '../components/about/AboutFAQ'

import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <AboutHero />
      <AboutHistory />
      <AboutContacts />
      <AboutFAQ />
    </div>
  )
}
