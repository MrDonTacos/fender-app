import { Arg, Args, Authorized, Ctx, Field, FieldResolver, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { skipTakeArgs } from "../classes/helpers/skip-take";
import {Pokemon, PokemonAbility, PokemonResource, PokemonResponse}  from "../classes/Pokemon"
import { Context } from "../Context";
import { MixedCharacter } from "../classes/PokeRick";

const MAX_POKEMONS = 541
const MAX_RICKS = 826


@Resolver(() => PokemonResponse)
export class MixedCharacterResolver{  
    @Query(returns => [MixedCharacter], {description: "A query designed to retreive a list of pokemons based on skip/limit"})
    async getRandomVS(@Arg("isPokemon") isPokemon: boolean, @Ctx() context: Context): Promise<MixedCharacter[]> {
        const randomCharacters: MixedCharacter[] = [];
        const randomID = (number) => Math.floor(Math.random() * number) +1;

        const getPokemon = async (randomID): Promise<MixedCharacter> => {
            const pokemon: any = await context.dataSources.pokeApi.getPokemonByNameOrId(randomID) 
            console.log(pokemon)
            return {
                name: pokemon.name,
                image: pokemon?.sprites?.front_default ?? "https://stock.adobe.com/search?k=%22404+error%22",
                type: pokemon?.types?.map(m => m.type.name).join(",") ?? "unknown",
                status: "unknown",
                species: pokemon?.species?.name ?? "uknown",

            }
        }

        const getRicks = async (randomID): Promise<MixedCharacter> => {
            const rickMorty = await context.dataSources.rickMortyApi.getCharacter(randomID) 
            return {
                name: rickMorty.name,
                image: rickMorty?.image ?? "https://stock.adobe.com/search?k=%22404+error%22",
                type: rickMorty.type,
                status: rickMorty.status,
                species: rickMorty.species,
            }
        }

        const pokemon = await getPokemon(randomID(MAX_POKEMONS))
        const rickMortys = await getRicks(randomID(MAX_RICKS))
        randomCharacters.push(pokemon, rickMortys)
        return randomCharacters
    }
}