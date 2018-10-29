<p align="center">
  <img alt="React Mana" src="https://raw.githubusercontent.com/Saeris/react-mana/master/resources/header.png" style="max-width:100%;"/>
</p>
<p align="center">
  <a href="https://www.npmjs.org/package/@saeris/react-mana">
    <img src="https://img.shields.io/npm/v/@saeris/react-mana.svg?style=flat" alt="Package Version">
  </a>
  <a href="https://travis-ci.org/Saeris/react-mana">
    <img src="https://travis-ci.org/Saeris/react-mana.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://codecov.io/gh/Saeris/react-mana">
    <img src="https://codecov.io/gh/Saeris/react-mana/branch/master/graph/badge.svg" alt="Code Coverage"/>
  </a>
  <a href="https://snyk.io/test/github/Saeris/react-mana?targetFile=package.json">
    <img src="https://snyk.io/test/github/Saeris/react-mana/badge.svg?targetFile=package.json" alt="Known Vulnerabilities">
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/Saeris/react-mana.svg" alt="Dependencies">
  </a>
</p>
<p align="center">A simple React component wrapper around <a href="https://github.com/andrewgioia/Mana">Mana Font</a>.</p>

---

## 📦 Installation

```bash
npm install --save @saeris/react-mana mana-font
# or
yarn add @saeris/react-mana mana-font
```

> Note: [Mana Font](https://github.com/andrewgioia/Mana) is a required peer-dependency. This component will not work without it!

## 🔧 Usage

To use this component, simply import it and pass in some props:

```jsx
import React, { Component } from "react"
import { render } from "react-dom"
import { Mana } from "@saeris/react-mana"

const App = () => (
  <Mana symbol="g" shadow fixed size="2x"/>
)

render(<App />, document.getElementById("root"))
```

## 📋 Props

Prop Name | Prop Type | Required | Default Value | Notes
----------|:---------:|:--------:|:-------------:|:-----
symbol    | `string`  | Yes      | None          | For a list of available symbols, please refer to either [Mana Font's documentation](https://andrewgioia.github.io/Mana/icons.html) or the [live demo site](https://react-mana.saeris.io)
size      | `string`  | No       | None          | Possible Values: `2x`, `3x`, `4x`, `5x`, `6x`
cost      | `boolean` | No       | `false`       | Used to toggle a background circle on the icon. The color will change based on the value of `symbol`
shadow    | `boolean` | No       | `false`       | Used to toggle a drop-shadow and background. When set, `cost` will also be set to `true`
half      | `boolean` | No       | `false`       | Used to toggle rendering [Unhinged  "half" mana symbols](https://mtg.gamepedia.com/Unhinged#Unhinged_mana_symbols)
fixed     | `boolean` | No       | `false`       | Used to toggle fixed-width icons
loyalty   | `number`  | No       | `null`        | When used with a Loyalty symbol, this controls the number displayed on top of the icon. Valid values are `0` to `20`


## 🏖️ Demo

You can either visit the [live demo site](https://react-mana.saeris.io), clone this repo and run the demo locally using `yarn start` and opening your browser to http://localhost:3000, or you can just play with it inside of CodeSandbox [here](https://codesandbox.io/s/github/Saeris/react-mana/tree/master/demo).

The demo site includes a searchable list of all available symbols with a handy preview tool with which you can quickly see the effects of the available props along with generated markup you can copy and paste right into your own application!

## 🍴 Alternatives

Looking for a Vue version of this component? We've got you covered! Check out [Vue-Mana](https://github.com/Saeris/vue-mana).

## 📣 Acknowledgements

Special thanks to [Andrew Gioia](https://github.com/andrewgioia) the creator of [Mana Font](https://github.com/andrewgioia/Mana) and to all that project's awesome contributors, without whom this library wouldn't exist!

And of course, a huge thanks to [Wizards of the Coast](http://magicthegathering.com) for creating this game we all love!

## 🥂 License

All card symbol images are copyright [Wizards of the Coast](http://magicthegathering.com).

Mana Font is licensed under the the [SIL OFL 1.1 license](http://scripts.sil.org/OFL).

Released under the [MIT license](https://github.com/Saeris/react-mana/blob/master/LICENSE.md).
