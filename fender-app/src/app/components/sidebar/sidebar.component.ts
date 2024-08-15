import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CarrouselComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private route: Router) {}
  eraseStorage() {
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }
}
