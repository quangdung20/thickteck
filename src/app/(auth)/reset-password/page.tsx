import * as React from 'react';
import type { Metadata } from 'next';
import { GuestGuard } from '@/auth-components/guest-guard';
import { Layout } from '@/auth-components/layout';
import { ResetPasswordForm } from '@/auth-components/reset-password-form';

import { config } from '@/config';
import { UserProvider } from '@/contexts/user-context';

export const metadata = { title: `Reset password | Auth | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Layout>
      <UserProvider>
        <GuestGuard>
          <ResetPasswordForm />
        </GuestGuard>
      </UserProvider>
    </Layout>
  );
}
