'use client';

import Navbar from '@/components/navbar/navbar';

import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'

import { lineaTestnet } from '@wagmi/core/chains'
import { MetaMaskButton } from '@metamask/sdk-react-ui';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient} = configureChains(
  [lineaTestnet],
  [publicProvider()]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
})

export default function MainLayout ({ children }: any) {
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
    dappMetadata: {
      name: 'Demo React App',
      url: window.location.host,
    },
  }

  return (
    <WagmiConfig config={config}>
      <MetaMaskUIProvider sdkOptions={sdkOptions} networks={chains}>
        <main className="flex flex-col min-h-screen p-[20px]">
          <Navbar />
          <MetaMaskButton theme={'light'} color="white"></MetaMaskButton>

          <MetaMaskButton theme="light" color="white" />

          {children}
        </main>
      </MetaMaskUIProvider>
    </WagmiConfig>
  )
}
