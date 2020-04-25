import React from 'react'

import css from './Newsletter.module.css'

function Newsletter(props) {
  const [email, setEmail] = React.useState('')
  // const emailPartsCount = countEmailParts(email)
  return (
    <section className={css.container}>
      <div className={css.spectrum} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div className={css.bar} key={i}></div>
        ))}
      </div>
      <header className={css.header}>
        <h2>Get the newsletter</h2>
      </header>
      <input
        className={css.email}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button className={css.submit}>Sign up</button>
    </section>
  )
}

export default Newsletter

// function countEmailParts(email) {
//   if (/@.+\..{2,}$/.test(email)) {
//     return 5
//   } else if (/@.+\..?$/.test(email)) {
//     return 4
//   } else if (/@.+$/.test(email)) {
//     return 3
//   } else if (/@/.test(email)) {
//     return 2
//   } else if (/.+/.test(email)) {
//     return 1
//   } else {
//     return 0
//   }
// }
