import type { NextAuthOptions   } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyUser } from '@/lib/auth/auth';
import type { JWT } from 'next-auth/jwt';
import type { User as NextAuthUser } from 'next-auth';
import type { Session } from 'next-auth';

export const authOptions: NextAuthOptions   = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await verifyUser(credentials.email, credentials.password);
        return user
          ? {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              avatar: user.avatar,
            }
          : null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }: {
      token: JWT,
      user: NextAuthUser
    }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }
      : {
      session: Session,
      token: JWT
    }
  ) {
      session.user.id = token.id as string;
      session.user.email = token.email??'';
      session.user.name = token.name??'';
      session.user.role = 'user';
      session.user.avatar = token.avatar as string;
      return session;
    },
  },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
};
