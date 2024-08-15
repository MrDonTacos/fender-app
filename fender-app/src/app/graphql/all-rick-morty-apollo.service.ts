import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface Origin {
  name: string
}

export interface Info {
  pages: number
}

export interface RickMortyOverview {
  info: Info
  results: Character[]
}

export interface Character {
  name: string
  status: string
  species: string
  origin: Origin
  type: string 
  image: string
}

export interface Characters {
  allCharacters: RickMortyOverview
}

@Injectable({
  providedIn: 'root'
})
export class AllRickMortyApolloService extends Query<Characters> {
  document = gql`
    query AllCharacters ($page: Int = 1) {
      allCharacters (page: $page) {
        results {  
          name
          status
          species
          type
          image
          origin {
            name
          }
        }
        info {
          pages
        }
      }
    }
  `;

}
