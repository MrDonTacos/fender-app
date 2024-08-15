import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'tr[user]',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User
}
