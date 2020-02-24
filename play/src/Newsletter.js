import React from 'react'

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
    <section>
      <header>
        <h2>Get the newsletter</h2>
      </header>

      <form action="#" method="post">
        <input type="email" placeholder="Your email" />
        <input type="submit" value="Sign up!" />
      </form>
    </section>
  )
}
