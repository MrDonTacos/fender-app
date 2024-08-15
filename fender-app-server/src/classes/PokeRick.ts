import { Field, Int, ObjectType } from "type-graphql"

@ObjectType({description: "The favorite object type! Give us all the information about our pokemon"})
export class MixedCharacter {
    @Field({description: ""})
    name: string
    @Field({description: "iamge uri"})
    image: string
    @Field({description: "type|gender"})
    type: string
    @Field({description: ""})
    status: string
    @Field({description: ""})
    species: string
}