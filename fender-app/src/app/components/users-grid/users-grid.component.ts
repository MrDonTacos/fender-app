import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { map, Observable, Subscription } from 'rxjs';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';

const GET_USERS = gql`
  query Users {
  users {
    user
    email
    plain_password
    ID
  }
}
`;

@Component({
  selector: 'app-users-grid',
  standalone: true,
  imports: [UserComponent, CommonModule, RouterLink],
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.css'
})
export class UsersGridComponent {
  users?: User[]
  postsQuery?: QueryRef<any, any>;
  querySubscription?: Subscription;

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    this.postsQuery = this.apollo.watchQuery({
      query: GET_USERS,
      variables: {
        isPokemon: false
      }
    }); 

    this.querySubscription = this.postsQuery
    .valueChanges
    .subscribe(({data}) => {
      console.log(data.users)
      this.users = data.users
      return data.users
    })
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  refresh() {
    this.postsQuery?.refetch()
  }
}
