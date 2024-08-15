import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateUserMutation } from '../../graphql/create-user-apollo.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  error?: string
  constructor(private readonly createUser: CreateUserMutation, private route: ActivatedRoute, private router: Router) { }
  loginControl = new FormGroup({
    username: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  })

  onRegister() {
    console.log(this.loginControl.value)
    const {username, password, email} = this.loginControl.value
    const user: User = {
      ID: null,
      user: username ?? "",
      plain_password: password ?? "",
      email: email ?? ""
    }

    this.createUser.mutate({
      user
    })
    .subscribe(({data}) => {
      this.router.navigate(["/login"])
    }, error => {
      this.error = error
    })
  }
}
