import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({ session, token }: { session: any; token: any }) {
            session.user.id = token.sub
            return session
        },
        async login({
            user,
            account,
            profile,
            email,
            credentials,
        }: {
            user: any
            account: any
            profile: any
            email: any
            credentials: any
        }) {
            return true
        },
    },
    pages: {
        signIn: '/login',
    },
}

const handler = (req: any, res: any) => NextAuth(req, res, authOptions)
export { handler as GET, handler as POST }
