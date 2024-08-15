import { Args, Ctx, Query, Resolver } from "type-graphql";
import { skipTakeArgs } from "../classes/helpers/skip-take";
import {Pokemon, PokemonAbility, PokemonResource, PokemonResponse}  from "../classes/Pokemon"
import { Character, RickMortyOverview } from "../classes/RickMorty";
import { Context } from "../Context";

@Resolver(() => RickMortyOverview)
export class RickMortyResolver{  
    @Query(returns => RickMortyOverview, {description: "A query designed to retreive a list of pokemons based on skip/limit"})
    async allCharacters(@Args() {page}: skipTakeArgs, @Ctx() context: Context) {
        return await context.dataSources.rickMortyApi.getAllCharacter(page)
    }
}