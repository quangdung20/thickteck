export const paths = {
  home: '/client',
  admin: '/admin/dashboard',
  auth: { signIn: '/sign-in', signUp: '/sign-up', resetPassword: '/reset-password' },
  dashboard: {
    overview: '/admin/dashboard',
    account: '/admin/dashboard/account',
    customers: '/admin/dashboard/customers',
    integrations: '/admin/dashboard/integrations',
    settings: '/admin/dashboard/settings',
    manageAdmin: '/admin/dashboard/manage-admin',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
