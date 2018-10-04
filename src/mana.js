import React from "react"
import classnames from "classnames"
import { symbols } from "./symbols"
import "mana-font"

export const sizes = [`2x`, `3x`, `4x`, `5x`, `6x`]

export const icons = Object.values(symbols).reduce((hash, group) => ({ ...hash, ...group }), {})

export const Mana = ({
  symbol = ``,
  size = ``,
  cost = false,
  shadow = false,
  half = false,
  fixed = false,
  loyalty = null,
  className,
  ...props
}) => (
  <i
    title={icons[symbol]}
    alt={icons[symbol]}
    className={classnames(className, {
      "ms": true,
      [`ms-${symbol}`]: Object.keys(icons).includes(symbol),
      [`ms-${size}`]: sizes.includes(size),
      "ms-cost": half || shadow || cost,
      "ms-shadow": shadow,
      "ms-half": half,
      "ms-fw": fixed,
      [`ms-loyalty-${parseInt(loyalty, 10)}`]:
        Object.keys(symbols[`Loyalty Symbols`]).includes(symbol) &&
        typeof loyalty === `number` &&
        loyalty >= 0 &&
        loyalty <= 20
    })}
    aria-hidden
    {...props}
  />
)
