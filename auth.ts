import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "./data/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: 'jwt'
	},
	providers: [
		Credentials({
            credentials: {
                email: {},
                password: {},
            },
			authorize: async (credentials) => {
				if (credentials === null) return null;            
				    try {
				        const user = getUserByEmail(
							typeof credentials.email === 'string' ? credentials.email : ''
						);
				        if (user) {
				            const isMatch = user?.password === credentials.password;
	
				            if (isMatch) {
				                return user;
				            } else {
				                throw new Error("Email or Password is not correct");
				            }
				        } else {
				            throw new Error("User not found");
				        }
				    } catch (error: any) {
				        throw new Error(error)
				    }
			}
        }),
	]
})