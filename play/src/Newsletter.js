import React from 'react'

import css from './Newsletter.module.css'

// TODO: dynamic styles
//   - Media queries
// TODO: overrides
//   - Different pages, themes

export default function Newsletter() {
  const [email, setEmail] = React.useState('')
  const emailPartsCount = countEmailParts(email)
  return (
    <section className={css.newsletter}>
      <div className={css.spectrum} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div
            className={i + 1 <= emailPartsCount ? css.barActive : css.bar}
            key={i}
          ></div>
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
        onChange={evt => setEmail(evt.target.value)}
      />
      <button className={emailPartsCount >= 5 ? css.submitActive : css.submit}>
        Sign up
      </button>
    </section>
  )
}

function countEmailParts(email) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5
  } else if (/@.+\..?$/.test(email)) {
    return 4
  } else if (/@.+$/.test(email)) {
    return 3
  } else if (/@/.test(email)) {
    return 2
  } else if (/.+/.test(email)) {
    return 1
  } else {
    return 0
  }
}
