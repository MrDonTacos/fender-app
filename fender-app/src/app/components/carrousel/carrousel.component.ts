import { Component } from '@angular/core';
import { CarrouselItemComponent } from '../carrousel-item/carrousel-item.component';
import { map, Observable } from 'rxjs';
import { AllPokemonsApolloService, PokemonResource } from '../../graphql/all-pokemons-apollo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CarrouselItemComponent, CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  pokemons?: Observable<PokemonResource[]>

  constructor(private readonly allPokemons: AllPokemonsApolloService) {}

  ngOnInit() {
    this.pokemons = this.allPokemons.watch({
      limit: 20,
      offset: 0
    }).valueChanges.pipe(map(result => {
      return result.data.allPokemons.pokemonResource
    })) 
  }
}
