import { DEFAULT_CALCULATOR_CONFIG } from '../config/calculator-config';

export function plusTen(number: Number, options = DEFAULT_CALCULATOR_CONFIG) {
  if (options.calculatorEnabled) {
    return +number + +10;
  }
}
