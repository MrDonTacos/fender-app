import { ApolloServer } from "apollo-server";
import PokeAPI from './dataSources/poke-api-ts'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql';
import {PokemonResponseResolver, AbilitiesResolver, PokemonResourceResolver, PokemonResolver} from './resolvs/pokemonResolver'
import { UserResolver } from "./resolvs/user-resolver";
import { RickMortyResolver } from "./resolvs/rickMortyResolver";
import RickMortyDataSource from "./dataSources/rickMortyDataSource";
import { MixedCharacterResolver } from "./resolvs/mixedCharacterResolver";
import MyDatabase from "./dataSources/UserDataSource"

async function bootstrap() 
{
    const knex = {
        client: 'sqlite3', // or 'better-sqlite3'
        connection: {
          filename: './data/fender-app',
        },
      };

      const UserDataSource = new MyDatabase(knex)

    const schema = await buildSchema({
        resolvers: [PokemonResponseResolver, AbilitiesResolver ,PokemonResourceResolver, PokemonResolver, UserResolver, RickMortyResolver, MixedCharacterResolver],
        nullableByDefault: true
    })

    const server = new ApolloServer({
        schema,
        dataSources: () => ({
            pokeApi: new PokeAPI(),
            rickMortyApi: new RickMortyDataSource(),
            userDataSource: UserDataSource
        })
    })

    server.listen().then(() => {
        console.log(`
        Listening on port 4000
        http://localhost:4000
        `)
    });

    // UserDataSource.initialize()
    // .then(() => {
    //     console.log("Connected to MySQL Poke Api DB")
    // })
    // .catch((data) => {
    //     console.log(data)
    //     console.error("Failed during init yo connect to MySQL Poke Api DB")
    // })
}

bootstrap();