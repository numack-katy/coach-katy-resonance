import { compare } from 'bcryptjs'
import { getClientByEmail, updateClientLastLogin } from './sanity'

export const authOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password')
        }

        // Get client from Sanity
        const client = await getClientByEmail(credentials.email)

        if (!client) {
          throw new Error('No account found with that email')
        }

        if (client.status === 'paused' || client.status === 'completed') {
          throw new Error('Your account is not currently active. Please contact your coach.')
        }

        // Check password
        const passwordMatch = await compare(credentials.password, client.passwordHash)

        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }

        // Update last login
        await updateClientLastLogin(client._id)

        // Return user object
        return {
          id: client._id,
          email: client.email,
          name: client.name,
          status: client.status,
          intakeCompleted: client.intakeCompleted,
          contractSigned: client.contractSigned
        }
      }
    }
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.status = user.status
        token.intakeCompleted = user.intakeCompleted
        token.contractSigned = user.contractSigned
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.status = token.status
        session.user.intakeCompleted = token.intakeCompleted
        session.user.contractSigned = token.contractSigned
      }
      return session
    }
  },
  pages: {
    signIn: '/portal/login',
    error: '/portal/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
}
