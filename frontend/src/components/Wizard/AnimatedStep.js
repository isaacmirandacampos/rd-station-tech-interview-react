import React from "react";
import {tv} from 'tailwind-variants'

const animatedStep = tv({
  base: 'wizard-step absolute inset-0 transition-all duration-500 ease-in-out opacity-0 transform scale-90 overflow',
  variants: {
    state: {
      actual: 'opacity-100 scale-100 z-10',
      non_actual: 'opacity-0 scale-90 z-0 pointer-events-none',
    },
  },
});

/**
 * @param {'actual' | 'non_actual'} state - Validate values before submit.
 * @param {jsx} children
 */

export const AnimatedStep = ({state, children}) => {
  return (
    <div className={animatedStep({state})}>
      {children}
    </div>
  )
}
