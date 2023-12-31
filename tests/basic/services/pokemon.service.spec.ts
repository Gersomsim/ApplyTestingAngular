import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import {HttpClientModule} from "@angular/common/http";

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('Debe de traer informacion de bulbasaur', (done) => {
    service.getPokemon(1).subscribe(
      pokemon => {
      expect(pokemon.name).toBe('bulbasaur');
      done();
    });
  })
});
