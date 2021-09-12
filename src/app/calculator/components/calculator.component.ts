import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  private number1: string;
  private number2: string;
  private operation: string;
  private result: number;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.clear();
  }

  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.operation = null;
    this.result = null;
  }

  addNumber(number: string): void {
    if (this.operation === null) {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }

  concatenateNumber(currentNumber: string, concatNumber: string): string {
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    if (concatNumber === '.' && currentNumber === '') {
      return '0.';
    }

    if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  defineOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.number2 === null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation
      );
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    );
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }

    if (this.number2 !== null) {
      return this.number2;
    }

    return this.number1;
  }
}
