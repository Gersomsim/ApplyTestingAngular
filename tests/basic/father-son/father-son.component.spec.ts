import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compile: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent]
    });
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compile).toMatchSnapshot();
  })
  test('no debe de aparecer los botones sin cliente', () => {
    const buttons = compile.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });
  test('debe de aparecer los botones si hay cliente', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();
    const buttons = compile.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });
  test('si hay cliente debe de hacer match con el snapshots', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();
    expect(compile).toMatchSnapshot()
  });
  test('debe de emitir on delete con el boton de eliminar', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();
    jest.spyOn(component.onDeleteClient, 'emit');
    const buttonDelete = compile.querySelector('[data-test=btn-delete]');
    buttonDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled()
  });
  test('debe de emitir la actualizacion del id de cliente con el boton de cambiar id', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();
    jest.spyOn(component.onUpdateClient, 'emit');
    const btnUpdate = compile.querySelector('[data-test=btn-change-id]');
    btnUpdate?.dispatchEvent(new Event('click'));
    expect(component.onUpdateClient.emit).toHaveBeenCalledWith({name: 'Juan', id: 5})
  });
  test('No debe de emitir con onChange con el id especificaco si no hay un cliente', () => {
    jest.spyOn(component.onUpdateClient, 'emit');
    component.onChange(10);
    expect(component.onUpdateClient.emit).not.toHaveBeenCalled();
  });
  test('debe de emitir con onChange con el id especificaco si hay un cliente', () => {
    component.client = { id: 1, name: 'Juan'};
    jest.spyOn(component.onUpdateClient, 'emit');
    component.onChange(10);
    expect(component.onUpdateClient.emit).toHaveBeenCalledWith({ name: 'Juan', id: 10});
  });
});
