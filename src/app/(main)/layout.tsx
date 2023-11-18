'use client';

import Navbar from '@/components/navbar/navbar';
import { MetaMaskProvider } from '@metamask/sdk-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  /* useChainChangeHandler(); */

  return (
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'Demo React App',
          url: window?.location?.host,
        },
      }}
    >
      <main className="flex flex-col min-h-screen p-[20px]">
        <Navbar />

        {children}
      </main>
    </MetaMaskProvider>
  );
}
