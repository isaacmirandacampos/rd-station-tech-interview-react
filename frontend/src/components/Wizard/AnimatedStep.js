import React from "react";

/**
 * @param {'actual' | 'non_actual'} state - Validate values before submit.
 * @param {Element} children
 */

export const AnimatedStep = ({state, children}) => {
  const actual = 'opacity-100 scale-100 z-10'
  const non_actual = 'opacity-0 scale-90 z-0 pointer-events-none'
  return (
    <div
      className={`wizard-step absolute inset-0 transition-all duration-500 ease-in-out opacity-0 transform scale-90 overflow ${state === 'actual' ? actual : non_actual}`}>
      {children}
    </div>
  )
}
