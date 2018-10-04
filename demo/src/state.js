import React, { Component } from "react"

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.initial || {}
  }

  update = valOrFn => {
    const { stateReducer = (state, changes) => changes, onChange = () => {} } = this.props
    const prev = this.state
    this.setState(
      state =>
        stateReducer(
          prev,
          typeof valOrFn === "function" ? valOrFn(state) : valOrFn
        ),
      () => onChange(this.state, prev)
    )
  }

  reset = () => this.update(this.props.initial)

  render() {
    return this.props.children({
      state: this.state,
      update: this.update,
      reset: this.reset
    })
  }
}
