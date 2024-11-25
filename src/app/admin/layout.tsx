import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { LocalizationProvider } from '@/core/localization-provider';
import { ThemeProvider } from '@/core/theme-provider/theme-provider';

import { UserProvider } from '@/contexts/user-context';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export default function AdminLayout({ children }: LayoutProps): React.JSX.Element {
//   return (
//     <div className="admin-container">
//       <LocalizationProvider>
//         <UserProvider>
//           <ThemeProvider>
//             <div className="admin-container">{children}</div>
//           </ThemeProvider>
//         </UserProvider>
//       </LocalizationProvider>
//     </div>
//   );
// }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>
              <div className="admin-container">{children}</div>
            </ThemeProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
