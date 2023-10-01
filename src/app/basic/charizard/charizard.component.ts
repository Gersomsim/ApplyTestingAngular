import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../interfaces/pokemon.interface";

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html'
})
export class CharizardComponent implements OnInit{
  public charizard?: Pokemon;

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.charizard = pokemon;
      })
  }

}
