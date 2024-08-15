import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface Pokemon {
  id: number
  name: string
  weight: number
  image: string
  height: number
  abilityM: string
  typesName: string
  speciesName: string
}

export interface PokemonResource {
  name: string
  url: string
  pokemon: Pokemon
}

export interface Pokemons {
  count: number
  next: string
  previous: string
  pokemonResource: PokemonResource[]
}

export interface Response {
  allPokemons : Pokemons
}

@Injectable({
  providedIn: 'root'
})
export class AllPokemonsApolloService  extends Query<Response> {
  document = gql`
  query allPokemons($limit: Int, $offset: Int) {
    allPokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      pokemonResource {
        name
        pokemon {
          id
          name
          weight
          image
          height
          abilityM
          abilities {
            name
          }
          typesName
          speciesName
        }
      }
    }
  }
`;
}
