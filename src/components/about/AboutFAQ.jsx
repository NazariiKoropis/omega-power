import styles from '../../pages/About.module.scss'

export default function AboutFAQ() {
  const faq = [
    {
      q: 'Чи є безкоштовне пробне тренування?',
      a: 'Так, перше тренування безкоштовне.',
    },
    {
      q: 'Чи є роздягальні та душ?',
      a: 'Так, є окремі чоловічі й жіночі роздягальні.',
    },
    { q: 'Чи можна заморозити абонемент?', a: 'Так, від 3-місячних тарифів.' },
    {
      q: 'Чи є групові тренування?',
      a: 'Так, понад 45 групових занять щотижня.',
    },
    { q: 'Чи працюєте ви в неділю?', a: 'Так, з 08:00 до 21:00.' },
  ]

  return (
    <section className={styles.faq}>
      <h2>FAQ</h2>

      {faq.map((item, i) => (
        <div key={i} className={styles.faqItem}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>
  )
}
