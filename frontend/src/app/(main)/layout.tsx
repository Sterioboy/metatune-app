'use client';

import Navbar from '@/components/navbar/navbar';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { createConfig, configureChains, WagmiConfig } from 'wagmi';

import { lineaTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

/* const { chains, publicClient, webSocketPublicClient } = configureChains([lineaTestnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector()],
  publicClient,
  webSocketPublicClient,
}); */

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

const client = createClient();

export default function MainLayout({ children }: { children: React.ReactNode }) {
  /* useChainChangeHandler(); */

  return (
    <WagmiConfig client={client}>
      <MetaMaskProvider
        debug={true}
        sdkOptions={{
          checkInstallationImmediately: false,
          dappMetadata: {
            name: 'Demo React App',
            url: typeof window !== 'undefined' ? window.location.host : undefined,
          },
        }}
      >
        <main className="flex flex-col min-h-screen p-[20px]">
          <Navbar />

          {children}
        </main>
      </MetaMaskProvider>
    </WagmiConfig>
  );
}
