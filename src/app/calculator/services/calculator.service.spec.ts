import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 = 5', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.addition);
      expect(addition).toBe(5);
    }
  ));

  it('should ensure that 1 - 4 = -3', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let substraction = service.calculate(
        1,
        4,
        CalculatorService.substraction
      );
      expect(substraction).toBe(-3);
    }
  ));

  it('should ensure that 1 * 4 = 4', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let multiplication = service.calculate(
        1,
        4,
        CalculatorService.multiplication
      );
      expect(multiplication).toBe(4);
    }
  ));

  it('should ensure that 1 / 4 = 0.25', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.division);
      expect(division).toBe(0.25);
    }
  ));

  it('should return 0 to invalid operations', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let invalidOperation = service.calculate(1, 4, '%');
      expect(invalidOperation).toBe(0);
    }
  ));
});
