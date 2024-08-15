import * as jwt from 'jsonwebtoken';
import { User } from '../../classes/User';

const { sign, verify } = jwt;

export const setToken = (user: User): string => {
    const {user: username} = user
    const token = sign({username: username}, "this_should_be_secret", {expiresIn: 60})
    return token
}

export const validateAccessToken = (token: string) => {
    try {
      return verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
      if (error.message !== 'jwt expired')
        console.error(`Access token error: ${error.message}`);
    }
  };