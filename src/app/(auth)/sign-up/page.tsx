import * as React from 'react';
import type { Metadata } from 'next';
import { GuestGuard } from '@/auth-components/guest-guard';
import { Layout } from '@/auth-components/layout';
import { SignUpForm } from '@/auth-components/sign-up-form';

import { config } from '@/config';
import { UserProvider } from '@/contexts/user-context';

export const metadata = { title: `Sign up | Auth | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Layout>
      <UserProvider>
        <GuestGuard>
          <SignUpForm />
        </GuestGuard>
      </UserProvider>
    </Layout>
  );
}
