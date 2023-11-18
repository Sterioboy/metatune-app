'use client';

import useChainChangeHandler from '@/hooks/useChainChangeHandler';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  /* useChainChangeHandler(); */

  return (
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: 'Demo UI React App',
        },
      }}
    >
      <main className="flex flex-col min-h-screen p-[20px]">{children}</main>
    </MetaMaskUIProvider>
  );
}
