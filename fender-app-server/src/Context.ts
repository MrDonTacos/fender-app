import PokeAPI from "./dataSources/poke-api-ts";
import RickMortyDataSource from "./dataSources/rickMortyDataSource";
import MyDatabase from "./dataSources/UserDataSource";

export interface Context {
  dataSources: {
    pokeApi: PokeAPI;
    rickMortyApi: RickMortyDataSource
    userDataSource: MyDatabase
  };
}