import { gql, Mutation } from 'apollo-angular';
import { Injectable } from '@angular/core';
 
export interface Login {
  Login: string
}



@Injectable({
  providedIn: 'root',
})
export class LoginMutation extends Mutation<Login> {
  document = gql`
    mutation Login($user: UserInDto) {
      Login(user: $user)
    }
  `;
}