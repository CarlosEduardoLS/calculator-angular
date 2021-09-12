import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  static readonly addition = '+';
  static readonly substraction = '-';
  static readonly division = '/';
  static readonly multiplication = '*';

  constructor() {}

  calculate(num1: number, num2: number, operation: string): number {
    let result: number;
    switch (operation) {
      case CalculatorService.addition:
        result = num1 + num2;
        break;
      case CalculatorService.substraction:
        result = num1 - num2;
        break;
      case CalculatorService.division:
        result = num1 / num2;
        break;
      case CalculatorService.multiplication:
        result = num1 * num2;
        break;
      default:
        result = 0;
        break;
    }
    return result;
  }
}
