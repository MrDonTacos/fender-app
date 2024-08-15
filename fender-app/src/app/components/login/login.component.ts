import { Component } from '@angular/core';
import {FormBuilder, Validators, FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { User } from '../../models/user';
import { LoginMutation } from '../../graphql/login-apollo-service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private readonly login: LoginMutation, private router: Router) { }
  loginControl = new FormGroup({
    username: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  })

  onLogin() {
    const {username, password, email} = this.loginControl.value
    const user: User = {
      ID: null,
      user: username ?? "",
      plain_password: password ?? "",
      email: email ?? ""
    }

    this.login.mutate({
      user
    }).subscribe(result => {
      console.log(result.data)
      if(result.data)
      {
        localStorage.setItem("token", result.data.Login)
        this.router.navigate(["/pokemon"])
      }
      else
        this.router.navigate(["/login"])
    })
  }
}
