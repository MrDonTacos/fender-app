// "info": {
//     "count": 826,
//     "pages": 42,
//     "next": "https://rickandmortyapi.com/api/character/?page=20",
//     "prev": "https://rickandmortyapi.com/api/character/?page=18"
//   },
//   "results": [
//     {
//       "id": 361,
//       "name": "Toxic Rick",
//       "status": "Dead",
//       "species": "Humanoid",
//       "type": "Rick's Toxic Side",
//       "gender": "Male",
//       "origin": {
//         "name": "Alien Spa",
//         "url": "https://rickandmortyapi.com/api/location/64"
//       },
//       "location": {
//         "name": "Earth",
//         "url": "https://rickandmortyapi.com/api/location/20"
//       },
//       "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
//       "episode": [
//         "https://rickandmortyapi.com/api/episode/27"
//       ],
//       "url": "https://rickandmortyapi.com/api/character/361",
//       "created": "2018-01-10T18:20:41.703Z"
//     },

import { Field, ObjectType } from "type-graphql"

@ObjectType({description: "Origin of each character"})
export class Origin {
    @Field(() => String, {description: "Name of the planet where it belongs"})
    name: string    
}
@ObjectType({description: "General info about each character"})
export class Character {
    @Field(() => String, {description: ""})
    name: string
    @Field(() => String, {description: ""})
    status: string
    @Field(() => String, {description: ""})
    species: string
    @Field(() => String, {description: ""})
    type: string
    @Field(() => String, {description: ""})
    image: string
    @Field(() => Origin)
    origin: Origin
}

@ObjectType({description: ""})
export class RickMortyPagination {
    @Field(() => Number, {description: "Total number of characters"})
    count: number
    @Field(() => Number, {description: "Total number of pages"})
    pages: number
    @Field(() => String, {description: "URI for the next page of characters"})
    next: string
    @Field(() => String, {description: "URI for previous page of characters"} )
    prev: string
}

@ObjectType({description: "Rick and Morty's overview info"})
export class RickMortyOverview {
    @Field(() => RickMortyPagination, {description: "Pagination Options"})
    info: RickMortyPagination
    @Field(() => [Character], {description: "Characters Info"})
    results: Character[]
}

