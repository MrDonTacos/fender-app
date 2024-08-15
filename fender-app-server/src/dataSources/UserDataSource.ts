import { SQLDataSource } from "datasource-sql"
import { UserInDto } from "../classes/dto/UserInDto"
import { ID } from "type-graphql"
import { User } from "../classes/User"

require('dotenv').config()

export default class MyDatabase extends SQLDataSource {
  async getUsers(): Promise<User[]> {
    const query = await this.knex.select("*").from("users")
    return query.map<User>(x => {
        return {
            ID: x.id,
            user: x.name,
            email: x.email,
            plain_password: x.password
        }

    })
  }

  async getUser(user: UserInDto): Promise<User> {
    const query = await this.knex.select('name', 'password', "email").from("users").where({name: user.user, password: user.plain_password}).first()
    console.log(query)
    return {
        ID: query.id,
        user: query.name,
        email: query.email,
        plain_password: query.password
    }
  }

  async createUser(user: UserInDto): Promise<void> {
    await this.knex("users").insert({id: null, name: user.user, email: user.email, password: user.plain_password})
  }
}