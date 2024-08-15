import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(type => ID, {description: "The users ID", nullable: true})
    ID: number
    @Field({description: "The username attach to the users"})
    user: String
    @Field({description: "Users email"})
    email: String
    @Field({description: "The password as a plain text for development purpose"})
    plain_password: String
}