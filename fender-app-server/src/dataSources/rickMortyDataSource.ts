import { RESTDataSource } from "apollo-datasource-rest"
import { Character, RickMortyOverview } from "../classes/RickMorty";

export default class RickMortyDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://rickandmortyapi.com/api/'
    }

    async getAllCharacter(page: number = 1): Promise<RickMortyOverview>
    {
        const resultOverview = await this.get<RickMortyOverview>(`character/?page=${page}`)
        return resultOverview;
    }

    async getCharacter(number): Promise<Character>
    {
        return await this.get(`character/${number}`)
    }
}
