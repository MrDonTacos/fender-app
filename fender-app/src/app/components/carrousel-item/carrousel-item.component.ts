import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonResource } from '../../graphql/all-pokemons-apollo.service';

@Component({
  selector: 'app-carrousel-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel-item.component.html',
  styleUrl: './carrousel-item.component.css'
})
export class CarrouselItemComponent {
  @Input() character!: PokemonResource

}
