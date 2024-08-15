import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType({description: "The favorite object type! Give us all the information about our pokemon"})
export class Pokemon {
    @Field(type => Int, {description: "Pokemon's ID"})
    id: number
    @Field({description: "Pokemon's name!"})
    name: String
    @Field({description: "Pokemon's weight in hectograms."})
    weight: number
    @Field({description: "Pokemon's front default sprite"})
    image: String
    @Field({description: "Pokemon's height in decimetres"})
    height: number
    @Field(type => [PokemonAbility], {description: "A list of abilities this pokemon probably has"})
    abilities: PokemonAbility[]
    @Field((type) => String, {description: "Arry with mapped name abilities"})
    abilityM: String
    @Field(type => String, {description: "A list of type this pokemon probably has"})
    typesName: string
    @Field(type => String, {description: "A list of species this pokemon probably has"})
    speciesName: string
}

@ObjectType({description: "Object which give us the name to fetch the pokemon and other relevant informations"})
export class PokemonResource {
    @Field({description: "Pokemons name"})
    name: String
    @Field({description: "API Url to look for the pokemon"})
    url: String
    @Field({description: "Pokemon's consulted via name"})
    pokemon: Pokemon
}

@ObjectType({description: "Entry object wich give us the global information about the poke-api pokemons resources, like total of pokemons and filters"})
export class PokemonResponse {
    @Field(type => ID, {description: "Total number of Pokemons in the Database"})
    count: number
    @Field({description: "Url for next page of pokemons"})
    next: String 
    @Field({description: "Url for previous page of pokemons"})
    previous: String
    @Field(type => [PokemonResource], {name: "pokemonResource", description: "List of Pokemons and their url ID"})
    results : PokemonResource[]
}

@ObjectType()
export class Ability {
    @Field({nullable: true, description: "Pokemon's ability object"})
    name: String
}

@ObjectType({description: "An object that contains the list of abilities from a pokemon"}) 
export class PokemonAbility {
    @Field({nullable: true, description: "Pokemon's ability name"})
    name: String
    @Field({nullable: true, description: "Pokemon's ability object"})
    ability: Ability
}

@ObjectType({description: "An object that contains an array for generic properties with name inside"}) 
export class GenericNameProperty {
    @Field({nullable: true, description: "Generic name property for different stats"})
    name: String
}
