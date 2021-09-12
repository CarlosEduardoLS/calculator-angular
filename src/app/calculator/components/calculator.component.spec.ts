import { CalculatorService } from './../services/calculator.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [CalculatorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ensure that 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnPlus = fixture.debugElement.query(By.css('#btnPlus'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnEqual = fixture.debugElement.query(By.css('#btnEqual'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnPlus.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnEqual.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
});
