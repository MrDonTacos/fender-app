import { ArgsType, Field, ID, InputType, Int } from "type-graphql";

@InputType()
export class UserInDto {
    @Field(type => Int, {description: "ID Field only use this field if you want to update the corresponding user."})
    ID: number
    @Field({description: "Set username."})
    user: String
    @Field({description: "Set email."})
    email: String
    @Field({description: "Set user password."})
    plain_password: String
}