import { Arg, Args, Authorized, Ctx, Field, FieldResolver, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { skipTakeArgs } from "../classes/helpers/skip-take";
import {GenericNameProperty, Pokemon, PokemonAbility, PokemonResource, PokemonResponse}  from "../classes/Pokemon"
import { Context } from "../Context";

@Resolver(() => PokemonResponse)
export class PokemonResponseResolver{ 
    @Query(returns => PokemonResponse, {description: "A query designed to retreive a list of pokemons based on skip/limit"})
    async allPokemons(@Args() {limit, offset}: skipTakeArgs, @Ctx() context: Context) {
        return await context.dataSources.pokeApi.getAllPokemon(limit, offset);
    }
    @Query(returns => Pokemon)
    async pokemon(@Arg("name") name: string, @Ctx() context: Context) {
        return await context.dataSources.pokeApi.getPokemonByNameOrId(name);
    }
}

@Resolver(of => PokemonAbility)
export class AbilitiesResolver implements ResolverInterface<PokemonAbility>{
    @FieldResolver()
    name(@Root() pokemonAbility: PokemonAbility)
    {   
        const {ability} = pokemonAbility;
        return ability.name;
    }
}

@Resolver(of => PokemonResource)
export class PokemonResourceResolver implements ResolverInterface<PokemonResource>{
    @FieldResolver()
    async pokemon(@Root() {name}: PokemonResource, @Ctx() context: Context): Promise<Pokemon>
    {
        return await context.dataSources.pokeApi.getPokemonByNameOrId(name as string)
    }
}

@Resolver(of => Pokemon)
export class PokemonResolver implements ResolverInterface<Pokemon> {
    @FieldResolver()
    image(@Root() {sprites}: any): String {
        return sprites.front_default;
    }  
    @FieldResolver()
    speciesName(@Root() {species}: any): string {
        return species.name;
    }
    @FieldResolver()
    abilityM(@Root() {abilities}: any): string {
        return abilities.map(m => m.ability.name).join(", ");
    }
    @FieldResolver()
    typesName(@Root() {types}: any): string {
        return types.map(m => m.type.name).join(", ");
    }
}