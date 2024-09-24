import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import connectDB from '@/lib/connectDB';
import User from '@/models/userModels.js';

// Function to connect to MongoDB
async function connectToDB() {
  await connectDB();
}

// Define authentication options
export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Connect to MongoDB
        await connectToDB();

        try {
          // Find the user based on username or email
          const user = await User.findOne({
            $or: [{ username: credentials.username }, { email: credentials.username }],
          });

          if (!user) {
            throw new Error('User not found');
          }

          // Compare the provided password with the hashed password in the database
          const passwordMatch = await bcrypt.compare(credentials.password, user.password);

          if (!passwordMatch) {
            throw new Error('Incorrect password');
          }

          // Resolve with the user object if authentication is successful
          return user;
        } catch (error) {
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user_id = token._id;
        session.user.username = { username: token.username }; 
      }
      return session
    },
  },
  pages: {
    signIn: '/admin', // Redirect to /admin on sign-in
  },
  secret: process.env.NEXTAUTH_SECRET, 
  session: {
    strategy: 'jwt', 
  },
};


