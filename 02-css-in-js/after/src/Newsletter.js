import React from 'react'
import styled, { keyframes } from 'styled-components'

const color = {
  spectrum1: '#ff598a',
  spectrum2: '#de56e8',
  spectrum3: '#b36bff',
  spectrum4: '#5b56e8',
  spectrum5: '#5e9fff'
}

const jitter = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.9);
  }
`

const Container = styled.section`
  position: relative;
  max-width: 100%;
  font-size: 1.25em;
  padding: 1em 1em 2em 1em;
  background: #2b283d;

  @media (min-width: 800px) {
    font-size: 2.25em;
    max-width: 700px;
  }
`

const Header = styled.header`
  position: relative;
  color: ${props => props.theme.header.fg};
  z-index: 1;
  text-transform: uppercase;
  font-size: 0.85em;
  text-shadow: 0 3px 2px #000;

  h2 {
    margin: 0 0 0.5em 0;
  }
`

const Email = styled.input`
  position: relative;
  height: 2em;
  line-height: 2em;
  font-size: 0.85em;
  padding: 0 0.5em;
  width: 100%;
  margin: 0.15em;
  border: 1px solid black;
  color: ${props => props.theme.input.color};
  background: ${props => props.theme.input.background};
  text-align: ${props => props.theme.input.textAlign};

  &:focus {
    outline: ${props => props.theme.inputFocus.outline || '2px solid #fff'};
    outline-offset: 0.15em;
  }
`

const Submit = styled.button`
  position: absolute;
  left: 50%;
  z-index: 1;
  overflow: hidden;
  margin: 0;
  background: transparent;
  color: #070222;
  background: #fff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 300ms;
  transform: ${props =>
    props.active
      ? 'translate(-50%, 50%) rotate(-5deg)'
      : 'translateX(-50%) rotate(0deg)'};
  bottom: ${props => (props.active ? '0' : 'auto')};
  height: ${props => (props.active ? 'auto' : '0')};
  width: ${props => (props.active ? 'auto' : '0')};
  font-size: ${props => (props.active ? '1em' : '0')};
  padding: ${props => (props.active ? '0.25em 1em' : '0')};
  border-bottom: ${props =>
    props.active ? `3px solid ${color.spectrum5}` : '0'};

  ${props =>
    props.active
      ? `
  &:focus {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }

  &:focus,
  &:hover {
    border-bottom-color: ${color.spectrum1};
    transform: translate(-50%, 50%) rotate(0deg) scale(1.2);
  }`
      : ''}
`

const Spectrum = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  pointer-events: none;
`

const Bar = styled.div`
  height: ${props => (props.active ? '100%' : '0.5em')};
  width: 20%;
  animation: ${jitter} 350ms ease-out infinite alternate;
  transform-origin: bottom;
  transition: all 1s;

  &:nth-child(1n) {
    background: ${color.spectrum1};
    animation-delay: 0;
  }
  &:nth-child(2n) {
    background: ${color.spectrum2};
    animation-delay: 50ms;
  }
  &:nth-child(3n) {
    background: ${color.spectrum3};
    animation-delay: 100ms;
  }
  &:nth-child(4n) {
    background: ${color.spectrum4};
    animation-delay: 150ms;
  }
  &:nth-child(5n) {
    background: ${color.spectrum5};
    animation-delay: 200ms;
  }
`

function Newsletter(props) {
  const [email, setEmail] = React.useState('')
  const emailPartsCount = countEmailParts(email)
  return (
    <Container>
      <Spectrum aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <Bar active={i + 1 <= emailPartsCount} key={i}></Bar>
        ))}
      </Spectrum>
      <Header>
        <h2>Get the newsletter</h2>
      </Header>
      <Email
        type="email"
        placeholder="Your email"
        value={email}
        onChange={evt => setEmail(evt.target.value)}
      />
      <Submit active={emailPartsCount >= 5}>Sign up</Submit>
    </Container>
  )
}

export default Newsletter

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
