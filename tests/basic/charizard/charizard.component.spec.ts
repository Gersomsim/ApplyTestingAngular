import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import {PokemonService} from "../../../src/app/basic/services/pokemon.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import mock = jest.mock;

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compile: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compile = fixture.nativeElement;

  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('Debe de hacer match con el snapshot', () => {
    expect(compile.innerHTML).toMatchSnapshot()
  });
  test('debe de mostrar un loading al inicio', () => {
    const h2 = compile.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...')
  });
  test('debe de cargar a charizard inmediatamente', () => {
    const dummyPokemon = {
      name: 'charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png'
      }
    }
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);
    fixture.detectChanges()
    const h3 = compile.querySelector('h3');
    const img = compile.querySelector('img');
    expect(h3?.textContent?.toLowerCase()).toBe(dummyPokemon.name.toLowerCase());
    expect(img?.src).toBe(dummyPokemon.sprites.front_default)
    expect(img?.alt).toBe(dummyPokemon.name)
  })
});
