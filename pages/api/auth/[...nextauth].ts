import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import bcrypt from 'bcryptjs';

import {
  postUserOfDB,
  searchEstudianteByEmailOfDB,
  searchUserByEmailOfDB,
  searchAdminByEmailOfDB,
} from 'database/Entities';

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialProvider({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo:',
          type: 'email',
          placeholder: 'correo@google.com',
        },
        password: {
          label: 'Contraseña:',
          type: 'password',
          placeholder: 'Contraseña',
        },
      },
      authorize: async (credentials) => {
        // console.log({ credentials });

        if (!credentials?.email || !credentials.password) return null;

        const [searchUser] = await searchUserByEmailOfDB(credentials?.email);
        console.log({ searchUser });

        if (!searchUser) return null;

        const validPassword = bcrypt.compareSync(
          credentials.password,
          searchUser.password_user
        );
        // console.log({ validPassword });

        if (!validPassword) return null;

        const [searchStudent] = await searchEstudianteByEmailOfDB(
          credentials?.email
        );

        const [searchAdmin] = await searchAdminByEmailOfDB(credentials?.email);

        delete searchStudent?.user?.password_user;
        delete searchAdmin?.user?.password_user;

        // console.log({ searchStudent, searchAdmin });

        // return {
        //   id: searchUser.correo_user,
        //   isLogued: true,
        //   ...searchStudent,
        //   ...searchAdmin,
        // };
        const User = {
          id: searchUser.correo_user,
          isLogued: true,
          ...searchStudent,
          ...searchAdmin,
        };
        // console.log({ User });
        return User;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  session: {
    maxAge: 3600,
    strategy: 'jwt',
    updateAge: 1200,
  },

  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return 'http://localhost:3000/login';
    // },

    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('-------------------------jwt-------------------------');
      // console.log({ token, user, account, profile, isNewUser });

      const validateUserOauth = async () => {
        const [validatehUser] = await searchUserByEmailOfDB(user?.email);

        if (!validatehUser) {
          await postUserOfDB({
            correo_user: user?.email,
            password_user: '123456',
            id_rol: 2,
            id_per: 1,
            valida_user: 1,
          });
        }

        await validateUser();
      };

      const validateUser = async () => {
        const email = user?.email || user?.id;
        const [searchStudent] = await searchEstudianteByEmailOfDB(email);
        const [searchAdmin] = await searchAdminByEmailOfDB(email);
        const [searchUser] = await searchUserByEmailOfDB(email);

        delete searchStudent?.user.password_user;
        delete searchAdmin?.user.password_user;
        delete searchUser?.password_user;

        token.isNewUser = !searchStudent && !searchAdmin;

        // token.data = searchStudent ?? searchAdmin ?? searchUser;
        token.data = searchStudent
          ? { isLogued: true, ...searchStudent }
          : searchAdmin
          ? { ...searchAdmin }
          : { ...searchUser };
      };

      switch (account?.type) {
        case 'oauth':
          await validateUserOauth();
          break;
        case 'credentials':
          await validateUser();
          break;
      }
      // return token;
      return token;
    },

    async session({ session, user, token }) {
      // console.log('-------------------------session-------------------------');
      // console.log({ session, user, token });

      session.user = token;
      // console.log(token);
      return session;
    },
  },
});
