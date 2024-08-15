import { gql, Mutation } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
 
@Injectable({
  providedIn: 'root',
})
export class CreateUserMutation extends Mutation<User> {
  document = gql`
    mutation Mutation($user: UserInDto) {
        createUser(user: $user) {
            ID
            user
            plain_password
            email
        }
    }
  `;
}