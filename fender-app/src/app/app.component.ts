import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPanelComponent, SidebarComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  token = localStorage.getItem('Token')
  title = 'fender-app';
}