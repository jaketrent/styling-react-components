import React from "react";

const color = {
  spectrum1: "#ff598a",
  spectrum2: "#de56e8",
  spectrum3: "#b36bff",
  spectrum4: "#5b56e8",
  spectrum5: "#5e9fff",
};

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
  return (
    <section>
      {props.children}
      <style jsx>
        {`
          section {
            position: relative;
            max-width: 100%;
            font-size: 1.25em;
            padding: 1em 1em 2em 1em;
            background: #2b283d;
          }
          /* 1-1 */
        `}
      </style>
    </section>
  );
}

function Header(props) {
  return (
    <header>
      {props.children}
      <style jsx>
        {`
          header {
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            font-size: 0.85em;
            text-shadow: 0 3px 2px #000;
          }
          /* 1-2 */
        `}
      </style>
    </header>
  );
}

function Email(props) {
  return (
    <>
      <input {...props} />
      <style jsx>
        {`
          input {
            position: relative;
            height: 2em;
            line-height: 2em;
            font-size: 0.85em;
            padding: 0 0.5em;
            width: 100%;
            margin: 0.15em;
            border: 1px solid black;
          }
          /* 1-3 */
        `}
      </style>
    </>
  );
}

function Submit(props) {
  return (
    <button>
      {props.children}
      <style jsx>
        {`
          button {
            position: absolute;
            bottom: 0;
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
            /* 1-4 */
            translate: ${props.active ? "-50% 50%" : "-50%"};
            rotate: ${props.active ? "-5deg" : "45deg"};
            border-bottom: ${props.active
              ? `3px solid ${color.spectrum5}`
              : "0"};
            outline: none;
          }
          /* 1-5 */
          button:focus {
            outline: 2px solid #fff;
            outline-offset: 4px;
          }
          button:focus,
          button:hover {
            border-bottom-color: ${color.spectrum1};
            rotate: 0deg;
            scale: 1.2;
          }
        `}
      </style>
    </button>
  );
}

function Spectrum(props) {
  return (
    <div {...props}>
      {props.children}
      <style jsx>
        {`
          div {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: flex-end;
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
}

function Bar(props) {
  return (
    <div>
      <style jsx>
        {`
          div {
            /* 1-6 */
            /* 1-7 */
            width: 20%;
            transform-origin: bottom;
            transition: all 1s;
          }
          div:nth-child(1n) {
            background: ${color.spectrum1};
            animation-delay: 0;
          }
          div:nth-child(2n) {
            background: ${color.spectrum2};
            animation-delay: 50ms;
          }
          div:nth-child(3n) {
            background: ${color.spectrum3};
            animation-delay: 100ms;
          }
          div:nth-child(4n) {
            background: ${color.spectrum4};
            animation-delay: 150ms;
          }
          div:nth-child(5n) {
            background: ${color.spectrum5};
            animation-delay: 200ms;
          }
        `}
      </style>
    </div>
  );
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
