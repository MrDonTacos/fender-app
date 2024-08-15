import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonResource } from '../../graphql/all-pokemons-apollo.service';
import { Character } from '../../graphql/all-rick-morty-apollo.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent implements OnInit {
  @Input() character!: Character

  ngOnInit() {
    
  }
}
