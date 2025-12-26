import { UserRole, BlingSyncStatus } from '@prisma/client';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      image?: string | null;
    } & DefaultSession['user'];
    required2FA?: boolean;
  }

  interface User {
    id: string;
    role: UserRole;
    required2FA?: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: UserRole;
    required2FA?: boolean;
    auditCreated?: boolean;
  }
}
