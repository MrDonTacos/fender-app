import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { AllPokemonsApolloService, PokemonResource, Pokemons } from '../../graphql/all-pokemons-apollo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from "../carrousel/carrousel.component";
import { ListCardsComponent } from '../list-cards/list-cards.component';
import { CardCardComponent } from '../card-card/card-card.component';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarrouselComponent, ListCardsComponent, CardCardComponent],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css'
})

export class MainPanelComponent implements OnInit {
  pokemons?: Observable<PokemonResource[]>

  constructor(private readonly allPokemons: AllPokemonsApolloService) {}

  ngOnInit() {
    // use it!
    this.pokemons = this.allPokemons.watch({
      limit: 20,
      offset: 0
    }).valueChanges.pipe(map(result => {
      console.log(result)
      return result.data.allPokemons.pokemonResource
    })) 

  }
}
