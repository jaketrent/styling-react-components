import React from 'react'

import { ThemeContext } from './ThemeContext.js'

function Newsletter(props) {
  const [email, setEmail] = React.useState('')
  const emailPartsCount = countEmailParts(email)
  const [emailFocused, setEmailFocused] = React.useState(false)
  const [submitHovered, setSubmitHovered] = React.useState(false)
  const { theme } = React.useContext(ThemeContext)
  const { width } = useWindowDimensions()
  return (
    <section style={styles.container({ width })}>
      <div style={styles.spectrum()} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div
            style={styles.bar({ active: i + 1 <= emailPartsCount, i })}
            key={i}
          ></div>
        ))}
      </div>
      <header style={styles.header({ theme })}>
        <h2 style={styles.headerH2()}>Get the newsletter</h2>
      </header>
      <input
        style={styles.email({ focused: emailFocused, theme })}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={evt => setEmail(evt.target.value)}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <button
        style={styles.submit({
          active: emailPartsCount >= 5,
          hovered: submitHovered
        })}
        onFocus={() => setSubmitHovered(true)}
        onBlur={() => setSubmitHovered(false)}
        onMouseOver={() => setSubmitHovered(true)}
        onMouseOut={() => setSubmitHovered(false)}
      >
        Sign up
      </button>
    </section>
  )
}

export default Newsletter

const color = {
  spectrum1: '#ff598a',
  spectrum2: '#de56e8',
  spectrum3: '#b36bff',
  spectrum4: '#5b56e8',
  spectrum5: '#5e9fff'
}

const styles = {
  container: ({ width }) => ({
    position: 'relative',
    maxWidth: width >= 800 ? '700px' : '100%',
    fontSize: width >= 800 ? '2.25em' : '1.25em',
    padding: '1em 1em 2em 1em',
    background: '#2b283d'
  }),
  spectrum: () => ({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    pointerEvents: 'none'
  }),
  bar: ({ active, i }) => ({
    height: active ? '100%' : '0.5em',
    width: '20%',
    transformOrigin: 'bottom',
    transition: 'all 1s',
    background: color[Object.keys(color)[i % Object.keys(color).length]]
  }),
  header: ({ theme }) => ({
    position: 'relative',
    color: theme.header.fg || 'white',
    zIndex: '1',
    textTransform: 'uppercase',
    fontSize: '0.85em',
    textShadow: '0 3px 2px #000'
  }),
  headerH2: () => ({
    margin: '0 0 0.5em 0'
  }),
  email: ({ focused, theme }) => ({
    position: 'relative',
    height: '2em',
    lineHeight: '2em',
    fontSize: '0.85em',
    padding: '0 0.5em',
    width: '100%',
    margin: '0.15em',
    border: '1px solid black',
    color: theme.input.color || 'inherit',
    background: theme.input.background || 'inherit',
    textAlign: theme.input.textAlign || 'inherit',
    outlineOffset: '0.15em',
    outline: focused ? theme.inputFocus.outline || '2px solid #fff' : 'none'
  }),
  submit: ({ active, hovered }) => ({
    position: 'absolute',
    left: '50%',
    transform: hovered
      ? 'translate(-50%, 50%) rotate(0deg) scale(1.2)'
      : active
      ? 'translate(-50%, 50%) rotate(-5deg)'
      : 'translateX(-50%) rotate(0deg)',
    bottom: '0',
    height: active ? 'auto' : '0',
    width: active ? 'auto' : '0',
    overflow: 'hidden',
    padding: active ? '0.25em 1em' : '0',
    margin: '0',
    background: active ? '#fff' : 'transparent',
    border: '0',
    borderBottom: hovered
      ? `3px solid ${color.spectrum1}`
      : active
      ? `3px solid ${color.spectrum5}`
      : 0,
    textTransform: 'uppercase',
    transition: 'all 300ms',
    fontSize: active ? '1em' : '0',
    zIndex: '1',
    color: '#070222',
    fontWeight: 'bold',
    cursor: 'pointer',
    outlineOffset: '4px',
    outline: hovered ? '2px solid #fff' : 'none'
  })
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions({ width: window.innerWidth })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
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
