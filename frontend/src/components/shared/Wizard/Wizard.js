import {AnimatedStep} from "./AnimatedStep";
import React from "react";

/**
 * @typedef {Object} Step
 * @property {number} step - The unique identifier for the product.
 * @property {boolean} active - The name of the product.
 * @property {Element} children - The category the product belongs to.
 */

/**
 * @param {Step[]} steps
 */
export const Wizard = ({steps}) => {
  return (
    <div className="w-full relative md:h-[500px]">
      {steps.map(step =>
        <AnimatedStep state={step.active ? "actual" : "non_actual"} key={step.step}>{step.children}</AnimatedStep>
      )}
    </div>
  )
}
