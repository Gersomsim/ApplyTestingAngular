import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compile: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer mach con el snapshot', () => {
    expect(compile).toMatchSnapshot()
  })

  test('increaseBy debe de incrementar basado en el argumento (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15)
  });

  test('Hacer click en los botones debe de incrementar y decrementar en 1', () => {
    const buttons = compile.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  })

  test('Cambiar el counter debe de actualizar el tag h1', () => {

    component.increaseBy(10);
    fixture.detectChanges()

    const h1 = compile.querySelector('h1');

    expect(h1?.textContent).toContain('20');
  });
});
