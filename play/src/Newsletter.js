import React from 'react'

import css from './Newsletter.module.css'

// TODO: dynamic styles
//   - Media queries
// TODO: overrides
//   - Different pages, themes
//
//
// IDEAS
//  - animate in the sign up button on focus/validation

export default function Newsletter() {
  return (
    <section className={css.newsletter}>
      <header className={css.header}>
        <h2>Get the newsletter</h2>
      </header>

      <form action="#" method="post">
        <input className={css.email} type="email" placeholder="Your email" />
        <input className={css.submit} type="submit" value="Sign up!" />
      </form>
    </section>
  )
}
