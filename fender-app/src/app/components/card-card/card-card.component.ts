import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { map, Observable, Subscription } from 'rxjs';
import { VsData } from '../../models/poke-rick';

const GET_CHARACTERS = gql`
  query GetRandomVS($isPokemon: Boolean) {
  getRandomVS(isPokemon: $isPokemon) {
    type
    status
    species
    name
    image
  }
}
`;

@Component({
  selector: 'app-card-card',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './card-card.component.html',
  styleUrl: './card-card.component.css'
})
export class CardCardComponent implements OnInit, OnDestroy {
  holder?: Observable<VsData[]>
  rick?: VsData
  pokemon?: VsData
  postsQuery?: QueryRef<any, any>;
  querySubscription?: Subscription;

  constructor (private readonly apollo: Apollo) {}

  ngOnInit() {
    this.postsQuery = this.apollo.watchQuery({
      query: GET_CHARACTERS,
      variables: {
        isPokemon: false
      }
    }); 

    this.querySubscription = this.postsQuery
    .valueChanges
    .subscribe(({data}) => {
      console.log("fads")

      const [rick, poke] = data.getRandomVS
      console.log(rick, poke)
      this.rick = rick
      this.pokemon = poke
      return data.getRandomVS
    })
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  randomise() {
    this.postsQuery?.refetch()
  }
}
