import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainPanelComponent } from '../main-panel/main-panel.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, MainPanelComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
