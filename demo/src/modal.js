import React, { Component } from "react"
import { createPortal } from 'react-dom'
import { Content, Overlay, Button } from "./elements"

export class Modal extends Component {
  state = {
    isOpen: this.props.isOpen || false,
    previousFocus: null
  }

  setFocus = () => {
    if (!this.state.isOpen) {
      const previousFocus = document.getElementById(this.state.previousFocus)
      if (previousFocus.focus) previousFocus.focus()
    }
  }

  toggleModal = e => {
    if(e) e.stopPropagation()
    document.body.classList.toggle(`modal`)
    const id = e.currentTarget.id
    this.setState(({ isOpen, previousFocus }) => ({
      isOpen: !isOpen,
      previousFocus: isOpen ? previousFocus : id
    }))
  }

  listenKeyboard = e => {
    if (this.state.isOpen && (e.key === `Escape` || e.keyCode === 27)) {
      e.preventDefault()
      this.setState(({ isOpen }) => ({ isOpen: false }))
    }
  }

  componentDidMount = () => {
    window.addEventListener(`keydown`, this.listenKeyboard.bind(this), true)
  }

  componentWillUnmount = () => {
    window.removeEventListener(`keydown`, this.listenKeyboard.bind(this), true)
  }

  onDialogClick = e => {
    if (e) e.stopPropagation()
  }

  render() {
    const { children } = this.props
    const { isOpen, previousFocus } = this.state

    return children({
      isOpen,
      handleToggle: this.toggleModal,
      handleDialogClick: this.onDialogClick,
      ModalContent: props => (
        <Content
          tag="section"
          active={isOpen}
          focusTrapOptions={{
            onDeactivate: this.setFocus,
            returnFocusOnDeactivate: false,
            clickOutsideDeactivates: true
          }}
          onClick={this.onDialogClick}
          {...props}
        />
      ),
      ModalOverlay: props => <Overlay onClick={this.toggleModal} isOpen={isOpen} {...props} />,
      ToggleModal: ({ onClick, ...props}) => (
        <Button type="button" onClick={e => {
          this.toggleModal(e)
          onClick(e)
        }} {...props} />
      )
    })
  }
}
