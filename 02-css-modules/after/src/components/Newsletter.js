import React from "react";

import css from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const emailPartsCount = countEmailParts(email);
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
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <Submit active={emailPartsCount >= 5}>Sign up</Submit>
    </Container>
  );
}

function Container(props) {
  return <section className={css.container}>{props.children}</section>;
}

function Header(props) {
  return <header className={css.header}>{props.children}</header>;
}

function Email(props) {
  return <input className={css.email} {...props} />;
}

function Submit(props) {
  return (
    <button className={props.active ? css.submitActive : css.submit}>
      {props.children}
    </button>
  );
}

function Spectrum(props) {
  return (
    <div className={css.spectrum} {...props}>
      {props.children}
    </div>
  );
}

function Bar(props) {
  return <div className={props.active ? css.barActive : css.bar}></div>;
}

function countEmailParts(email) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5;
  } else if (/@.+\..?$/.test(email)) {
    return 4;
  } else if (/@.+$/.test(email)) {
    return 3;
  } else if (/@/.test(email)) {
    return 2;
  } else if (/.+/.test(email)) {
    return 1;
  } else {
    return 0;
  }
}
