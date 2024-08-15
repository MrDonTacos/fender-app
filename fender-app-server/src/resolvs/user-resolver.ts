import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { UserInDto } from "../classes/dto/UserInDto";
import { User } from "../classes/User";
import { UserEntity } from "../entity/UserEntity";
import { ApolloError } from "apollo-server";
import { setToken } from "./helper/jwt";
import { Context } from "../Context";

@Resolver(of => User)
export class UserResolver {
    @Query(() => [User])
    async users(@Ctx() ctx: Context) {
        try {
            const user = await ctx.dataSources.userDataSource.getUsers()
            return user
        } catch(e) {
            throw new ApolloError("Not valid username")
        }
    }

    @Mutation(() => String)
    async Login(@Arg("user") userIn: UserInDto, @Ctx() ctx: Context) {
        try {
            const user = await ctx.dataSources.userDataSource.getUser(userIn)
            if(user)
                return setToken(user)
        } catch(e) {
            console.log(e)
            throw new ApolloError("Not valid username")
        }
    }

    @Mutation(() => User, {description: "Mutation to create an user based on a username and a plain text password."})
    async createUser(@Arg("user") userIn: UserInDto, @Ctx() ctx: Context) {
        try
        {
            await ctx.dataSources.userDataSource.createUser(userIn)
            return "Success"
        }
        catch(err)
        {
            console.error(err)
            throw new Error("No se ha podido generar el usuario.");
        }            
    }
}