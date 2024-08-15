import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { AllPokemonsApolloService, PokemonResource } from '../../graphql/all-pokemons-apollo.service';
import { AllRickMortyApolloService, Character, Characters, RickMortyOverview } from '../../graphql/all-rick-morty-apollo.service';
import { Query, QueryRef, Subscription } from 'apollo-angular';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css'
})
export class ListCardsComponent {
  characters?: Observable<Character[]>
  numberPages: number = 1
  page: number = 1

  pager = {
    totalPages: 0,
    currentPage: 1,
    pages: [1]
  };
  index = 0
  length = 5
  last = this.index + this.length
  postsQuery?: QueryRef<Characters>;

  constructor(private readonly allCharacters: AllRickMortyApolloService) {}

  ngOnInit() {
    this.postsQuery = this.allCharacters.watch({
      page: this.page
    }); 

    this.characters = this.postsQuery
    .valueChanges
    .pipe(map(results => {
      this.numberPages = results.data.allCharacters.info.pages
      if(this.pager.pages.length == 1)
      for (let i = 2; i < this.numberPages; i++) {
        this.pager.pages.push(i)
      }
        this.pager = {...this.pager, totalPages: this.numberPages}
      return results.data.allCharacters.results}
    ))
  }

  setFirst(value: number) {
    this.pager = {...this.pager, currentPage: value};
    this.page = value
    this.index = 0
    this.last = this.index + this.length
    this.postsQuery?.refetch({page: value})
  }

  setLast() {
    const last = this.numberPages
    this.pager = {...this.pager, currentPage: last};
    this.index = last - this.length
    this.last = last
    this.page = last
    console.log(this.index, this.last)
    this.postsQuery?.refetch({page: last})
  }

  setPage(value: number) {
    this.pager = {...this.pager, currentPage: value};
    this.page = value

    if(value > this.last){
      console.log(value)
      console.log(this.index)
      this.index = value-1 
      this.last = this.index + this.length
    }
    else if(value < this.index+1)
    {
      console.log(value)
      this.index = value - this.length
      this.last = value
    }
    this.postsQuery?.refetch({page: value})
  }
}
