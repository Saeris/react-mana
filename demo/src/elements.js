import React from "react"
import styled from "react-emotion"
import FocusTrap from "focus-trap-react"
import { Mana } from "../../src"

const colors = {
  bg: `#f5f5f4`,
  header: {
    bg: `#506250`,
    text: `#f8fcf9`,
    shadow: `#080c09`
  },
  footer: {
    bg: `#506250`,
    text: `#f8fcf9`,
    hover: `#f8f9b9`,
    border: `#afbda8`
  },
  code: {
    bg: `#d8dac8`,
    text: `#3f4135`,
    border: `#9ba97e`
  },
  syntax: {
    bg: `hsla(144, 60%, 96%, 1)`,
    text: `hsla(139, 39%, 27%, 1)`
  },
  search: {
    focus: `#bccf7d`
  },
  setlist: {
    hover: `#e6e7e4`
  },
  radio: {
    active: `hsla(80, 2%, 98%, 1)`,
    main: `hsla(120, 18%, 50%, 1)`,
    hover: `hsla(120, 20%, 36%, 1)`,
  }
}

export const Main = styled(`main`)`
  label: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: "Beleren";
  color: #333;
  background-color: ${colors.bg};

  a:focus {
    outline: none;

    text-shadow:
      -1px -1px 0 ${colors.search.focus},
      1px -1px 0 ${colors.search.focus},
      -1px 1px 0 ${colors.search.focus},
      1px 1px 0 ${colors.search.focus};

    i {
      text-shadow: none;
    }
  }
`

export const Header = styled(`header`)`
  label: header;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 5%;
  background-color: ${colors.header.bg};
`

export const Title = styled(`h1`)`
  label: title;
  flex: 1 1 auto;
  max-width: 128rem;
  padding: 0;
  margin: 0;
  color: ${colors.header.text};
  font-size: 3.5rem;
  text-shadow: 0 1px 0 ${colors.header.shadow};
  user-select: none;

  a {
    display: flex;
    align-items: center;;

    i {
      margin-right: 1rem;
    }
  }
`

export const Subtitle = styled(`h2`)`
  label: subtitle;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  color: #61605B;
  font-size: 3rem;
  user-select: none;
`

export const Package = styled(`section`)`
  label: package;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 5% 0.5rem 5%;
  border-bottom: 0.2rem solid ${colors.code.border};
  background-color: ${colors.code.bg};

  @media screen and (max-width: 699px) {
    display: none;
  }
`

export const Code = styled(`span`)`
  label: package-code;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  color: ${colors.code.text};
  font-size: 2rem;
  font-family: 'Fira Mono', monospace;
`

export const Section = styled(`section`)`
  label: section;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 5% 2.5rem 5%;
`

export const Controls = styled(`div`)`
  label: controls;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 128rem;
`

export const Search = styled(`input`)`
  label: controls-search-input;
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  max-width: 14rem;
  height: 3.6rem;
  padding: 1rem 0.5rem 0;
  border: 0;
  border-bottom: 0.1rem solid #ccc;
  background: none;
  background-color: transparent;
  font-size: 1.6rem;
  font-family: "Beleren";

  &:focus {
    outline: none;
    border-color: ${colors.search.focus};
  }

  &::placeholder {
    color: rgba(128, 128, 128, 0.5);
    font-style: italic;
  }
`

export const GroupTitle = styled(`h4`)`
  label: group-title;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #61605B;
  font-size: 2.4rem;
  user-select: none;
`

export const Group = styled(`div`)`
  label: group;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 128rem;
  margin-bottom: 2rem;
`

export const Setlist = styled(`ul`)`
  label: setlist;
  display: grid;
  flex: 1 0 auto;
  width: 100%;
  max-width: 128rem;
  list-style: none;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
`

export const SetlistItem = styled(`li`)`
  label: setlist-item;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  border-radius: 0.5rem;

  &:hover {
    background: ${colors.setlist.hover};
  }

  &:focus-within {
    background: ${colors.setlist.hover};
  }
`

export const IconWrapper = styled(`div`)`
  label: setlist-item-wrapper;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  padding: 0.9rem 1rem;
  color: #61605B;
  font-family: "Beleren";
`

export const Icon = styled(`span`)`
  label: setlist-item-icon;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 5.2rem;
`

export const IconDetails = styled(`div`)`
  label: setlist-item-icon-detials;
  display: flex;
  flex-direction: column;
`

export const IconName = styled(`strong`)`
  label: setlist-item-name;
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  padding: 0 1rem;
  font-size: 2rem;
  text-align: left;
  user-select: none;
`

export const IconCode = styled(`em`)`
  label: setlist-item-code;
  display: inline-flex;
  flex: 0 0 auto;
  padding: 0 1rem;
  font-size: 1.6rem;
  color: #999;
  user-select: none;
`

export const Overlay = styled(`aside`)`
  label: modal-overlay;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  ${({ isOpen }) => (isOpen ? `display: flex;` : `display: none;`)};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  ${({ isOpen }) => (isOpen ? `opacity: 1;` : `opacity: 0;`)};
  transition: opacity 2s ease-in;
  cursor: pointer;
`

export const Content = styled(FocusTrap)`
  label: modal-content;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 85rem;
  padding: 1rem 3rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  cursor: default;

  h3 {
    padding: 0 0 0.5rem;
    margin: 1rem 0 2rem;
    border-bottom: 1px solid #ddd;

    span:first-child {
      padding-right: 1rem;
      color: #444;
      font-size: 2.8rem;
    }

    span:last-child {
      color: #777;
      font-size: 2rem;
    }

    @media screen and (max-width: 600px) {
      span:last-child {
        display: none;
      }
    }
  }

  @media screen and (max-width: 770px) {
    width: 100%;
    height: 100vh;
    padding 1rem 2rem;
    border-radius: 0;
  }
`

export const Preview = styled(Mana)`
  label: preview;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 32.5rem;
  height: 32.5rem;
  font-size: 25rem;

  &.ms-1000000 {
    width: 56rem;
    height: 13rem;
    font-size: 10rem;

    &.ms-half {
      width: 28rem;
      margin-left: 28rem;
    }
  }
  &.ms-100 {
    width: 30rem;
    height: 16.25rem;
    font-size: 12.5rem;

    &.ms-half {
      width: 17.5rem;
      margin-left: 12.5rem;
    }
  }

  &.ms-half {
    width: calc(32.5rem / 2);
  }

  @media screen and (max-width: 415px) {
    width: 13rem;
    height: 13rem;
    font-size: 10rem;

    &.ms-half {
      width: calc(13rem / 2);
    }
  }
`

export const Row = styled(`div`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-family: 'Open Sans',sans-serif;
  font-size: 1.6rem;

  strong {
    padding-right: 2rem;
    font-family: 'Open Sans',sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    user-select: none;

    @media screen and (max-width: 415px) {
      padding-right: 1rem;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
    }
  }

  label {
    user-select: none;
    cursor: pointer;
  }

  code {
    padding: 0.4rem 0.8rem;
    background-color: ${colors.syntax.bg};
    color: ${colors.syntax.text};
    font-family: 'Fira Mono', monospace;
    font-size: 1.6rem;
    cursor: text;

    @media screen and (max-width: 415px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`

export const RadioGroup = styled(`ul`)`
  label: radio-group;
  display: flex;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0 0 2rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${colors.radio.main};
  font-family: 'Open Sans',sans-serif;

  &:hover {
    border-color: ${colors.radio.hover};

    li:not(:first-child) {
      border-left: 0.1rem solid ${colors.radio.hover};
    }
  }

  li:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  li:not(:first-child) {
    border-left: 0.1rem solid ${colors.radio.main};
  }

  li:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  @media screen and (max-width: 415px) {
    flex-wrap: wrap;
    align-self: center;
    width: 26rem;
    height: 6.2rem;

    &:hover {
      li:nth-child(4) {
        border-left: 0;
      }

      li:nth-child(-n+3) {
        border-bottom: 0.1rem solid ${colors.radio.hover};
      }
    }

    li:first-child {
      border-bottom-left-radius: 0;
    }

    li:nth-child(3) {
      border-bottom-right-radius: 0;
    }

    li:nth-child(-n+3) {
      border-bottom: 0.1rem solid ${colors.radio.main};
    }

    li:nth-child(4) {
      border-left: none;
      border-bottom-left-radius: 0.5rem;
    }

    li:last-child {
      border-top-right-radius: 0;
    }
  }
`

export const RadioButton = styled(`li`)`
  ${({ active }) => `
    label: radio-group-button;
    position: relative;
    font-size: 1.6rem;
    color: ${active ? `${colors.radio.active}` : `${colors.radio.main}`};
    ${active ? `background-color: ${colors.radio.main};` : ``};

    &:hover {
      color: ${colors.radio.active};
      background-color: ${colors.radio.hover};
    }

    label {
      display: block;
      width: 100%;
      height: 100%;
      padding: 1rem 2rem;
      user-select: none;
      cursor: pointer;
    }

    @media screen and (max-width: 415px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8.6rem;
      height: 3rem;
      font-size: 1.6rem;

      label {
        padding: 0.5rem 1rem;
        line-height: 1.9rem;
        text-align: center;
      }
    }
  `}
`

export const Toggleables = styled(`div`)`
  label: toggleables;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  margin-bottom: 2rem;
  font-family: 'Open Sans',sans-serif;
`

const ToggleIcon = styled(`span`)`
  ${({ checked }) => `
    label: checkbox;
    position: relative;
    display: inline-flex;
    width: 4.5rem;
    height: 2.6rem;
    margin-right: 1.5rem;
    border-radius: 1.3rem;
    border: 0.1rem solid ${colors.radio.main};

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      width: 0;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0.11rem;
      ${checked ? `right`: `left`}: 0.1rem;
      display: block;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 1.1rem;
      background-color: ${colors.radio.main};
      user-select: none;
      speak: none;
    }
  `}
`

const ToggleWrapper = styled(`label`)`
  label: toggle-wrapper;
  font-size: 1.8rem;
  line-height: 2.6rem;
  cursor: pointer;
  user-select: none;

  span {
    display: flex;
    align-items: center;
  }
  &:hover span span, &:focus-within span span {
    border-color: ${colors.radio.hover};
    &:after {
      background-color: ${colors.radio.hover};
    }
  }
`

export const Toggle = ({ checked = false, children, ...props }) => (
  <ToggleWrapper>
    <span>
      <ToggleIcon checked={checked}>
        <input type="checkbox" checked={checked} {...props}/>
      </ToggleIcon>
      {children}
    </span>
  </ToggleWrapper>
)

export const RadioInput = styled(`input`)`
  label: radio-group-input;
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 0;
`

export const Button = styled(`button`)`
  label: button;
  flex: 1 1 auto;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`

const Loyalty = styled(Button)`
  label: loyalty-button;
  font-size: 1.8rem;
  line-height: 4rem;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not(:disabled) span i:before {
    color: #333;
    text-shadow:
      -2px 0 ${colors.search.focus},
      0 2px ${colors.search.focus},
      2px 0 ${colors.search.focus},
      0 -2px ${colors.search.focus};
  }

  span {
    i {
      margin-left: 0.2rem;
      margin-right: 1.8rem;
    }
  }
`

export const LoyaltyButton = ({ children, ...props }) => (
  <Loyalty type="button" {...props}>
    <span>{children}</span>
  </Loyalty>
)

export const CloseButton = component => styled(component)`
  label: modal-close-button;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.2rem 2rem;
  color: ${colors.radio.main};
  font-size: 3rem;

  &:hover {
    color: ${colors.radio.hover};
  }

  &:focus {
    color: ${colors.radio.main};
    text-shadow:
      -1px 0 ${colors.search.focus},
      0 1px ${colors.search.focus},
      1px 0 ${colors.search.focus},
      0 -1px ${colors.search.focus};
  }
`

export const Footer = styled(`footer`)`
  label: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 5%;
  margin-top: auto;
  border-top: 0.2rem solid ${colors.footer.border};
  background-color: ${colors.footer.bg};
  color: ${colors.footer.text};
  font-size: 1.6rem;

  a:hover {
    color: ${colors.footer.hover};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
    max-width: 128rem;
  }
`
