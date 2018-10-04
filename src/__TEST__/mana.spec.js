import React from 'react'
import { render } from 'react-testing-library'
import { Mana } from "../mana"

describe(`Mana`, () => {
  describe(`valid`, () => {
    it(`renders an i element`, () => {
      const { container } = render(<Mana />)
      expect(container.firstChild.nodeName).toBe(`I`)
    })

    it(`has the 'ms' class`, () => {
      const { container } = render(<Mana />)
      expect(container.firstChild.classList.contains(`ms`)).toBeTruthy()
    })

    it(`has the 'ms-w' class when the 'symbol' prop is set to 'w'`, () => {
      const { container } = render(<Mana symbol="w" />)
      expect(container.firstChild.classList.contains(`ms-w`)).toBeTruthy()
    })

    it(`has the 'ms-fw' class when the 'fixed' prop is set to true`, () => {
      const { container } = render(<Mana fixed />)
      expect(container.firstChild.classList.contains(`ms-fw`)).toBeTruthy()
    })

    it(`has the 'ms-cost' class when the 'cost' prop is set to true`, () => {
      const { container } = render(<Mana cost />)
      expect(container.firstChild.classList.contains(`ms-cost`)).toBeTruthy()
    })

    it(`has the 'ms-cost' and '.ms-shadow' classes when the 'shadow' prop is set to true`, () => {
      const { container } = render(<Mana shadow />)
      expect(container.firstChild.classList.contains(`ms-cost`)).toBeTruthy()
      expect(container.firstChild.classList.contains(`ms-shadow`)).toBeTruthy()
    })

    it(`has a 'ms-[2-6]x' class when the 'size' prop has a valid size value`, () => {
      [`2x`, `3x`, `4x`, `5x`, `6x`].forEach(size => {
        const { container } = render(<Mana size={size} />)
        expect(container.firstChild.classList.contains(`ms-${size}`)).toBeTruthy()
      })
    })

    it(`has the 'ms-loyalty' class when the 'loyalty' prop has a numerical value between 0 and 20`, () => {
      for (let i = 0; i <= 20; i++) {
        const { container } = render(<Mana symbol="loyalty-up" loyalty={i} />)
        expect(container.firstChild.classList.contains(`ms-loyalty-${i}`)).toBeTruthy()
      }
    })

    it(`includes a custom class when passed in via the 'className' prop`, () => {
      const { container } = render(<Mana className="custom" />)
      expect(container.firstChild.classList.contains(`custom`)).toBeTruthy()
    })
  })

  describe(`invalid`, () => {
    it(`does not have additional classes when passed an invalid 'symbol' prop`, () => {
      const { container } = render(<Mana symbol="INVALID SYMBOL" />)
      expect(container.firstChild.classList).toHaveLength(1)
    })

    it(`does not have additional classes when the 'size' prop has a invalid size value`, () => {
      [`1x`, `7x`, 1, NaN, Infinity, null, false].forEach(size => {
        const { container } = render(<Mana size={size} />)
        expect(container.firstChild.classList).toHaveLength(1)
      })
    })

    it(`does not have a 'ms-loyalty-[0-9]+' class when the 'loyalty' prop has a numerical value outside of 0 and 20`, () => {
      const { container: el1 } = render(<Mana symbol="loyalty-up" loyalty={-1} />)
      const { container: el2 } = render(<Mana symbol="loyalty-up" loyalty={21} />)
      const { container: el3 } = render(<Mana symbol="loyalty-up" loyalty={Infinity} />)
      const { container: el4 } = render(<Mana symbol="loyalty-up" loyalty={NaN} />)

      expect([].some.call(el1.firstChild.classList, c => (/ms-loyalty-.[0-9]+/).test(c))).toBeFalsy()

      expect([].some.call(el2.firstChild.classList, c => (/ms-loyalty-.[0-9]+/).test(c))).toBeFalsy()

      expect([].some.call(el3.firstChild.classList, c => (/ms-loyalty-.[0-9]+/).test(c))).toBeFalsy()

      expect([].some.call(el4.firstChild.classList, c => (/ms-loyalty-.[0-9]+/).test(c))).toBeFalsy()
    })

    it(`does not have a 'ms-loyalty-[0-9]+' class when the 'loyalty' prop has a non-numerical value`, () => {
      const { container } = render(<Mana symbol="loyalty-up" loyalty="NON NUMERIC VALUE" />)
      expect([].some.call(container.firstChild.classList, c => (/ms-loyalty-.[0-9]+/).test(c))).toBeFalsy()
    })
  })
})
