import React, { Component, cloneElement } from 'react';
import { RadioGroup, RadioButton } from "./elements"
import { State } from "./state"

export const Radio = ({ name, onChange, children, selected = children[0] && children[0].props.value || ``, ...props }) => (
  <State initial={{ name, selected }} onChange={onChange}>
    {({ state, update }) => (
      <RadioGroup role="radiogroup" {...props}>
        {children.map((child, key) => (
          <RadioButton key={key} active={state.selected === child.props.value}>
            <label htmlFor={child.props.value}>
              {child.props.value}
            </label>
            {cloneElement(child, {
              name,
              id: child.props.value,
              type: "radio",
              "aira-checked": state.selected === child.props.value,
              onChange: e => {
                update ({ selected: e.currentTarget.value })
              }
            })}
          </RadioButton>
        ))}
      </RadioGroup>
    )}
  </State>
)
