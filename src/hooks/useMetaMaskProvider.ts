import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

// Custom hook for detecting MetaMask provider
function useMetaMaskProvider() {
  const [metaMaskProvider, setMetaMaskProvider] = useState(null);

  useEffect(() => {
    // Detect the MetaMask provider when the component using this hook mounts
    async function detectProvider() {
      try {
        const provider: any = await detectEthereumProvider();

        if (provider) {
          // Check if the detected provider is the same as window.ethereum
          if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
          }
          setMetaMaskProvider(provider);
        } else {
          console.log('Please install MetaMask!');
        }
      } catch (error) {
        console.error('Error detecting MetaMask provider:', error);
      }
    }

    detectProvider();
  }, []);

  return metaMaskProvider;
}

export default useMetaMaskProvider;
