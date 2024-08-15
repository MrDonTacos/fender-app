import { Pokemon } from "../classes/Pokemon";
import { RESTDataSource } from "apollo-datasource-rest"

export default class PokeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }

    async getAllPokemon(limit = 20, offset = 0)
    {
        return await this.get(`pokemon?limit=${limit}&offset=${offset}`)
    }

    async getPokemonByNameOrId(nameOrId: string | number): Promise<Pokemon>
    {
        return await this.get(`pokemon/${nameOrId}`)
    }
}
