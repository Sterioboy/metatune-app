import { useEffect } from 'react';

// Custom hook for handling Ethereum chain changes
function useChainChangeHandler() {
  useEffect(() => {
    // Define the handler function for chain changes
    function handleChainChanged() {
      // We recommend reloading the page, unless you must do otherwise.
      window?.location.reload();
    }

    // Add the event listener for 'chainChanged'
    window?.ethereum?.on('chainChanged', handleChainChanged);

    // Clean up the event listener when the component unmounts
    return () => {
      window?.ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  // This hook doesn't return any specific values but sets up the event listener.
}

export default useChainChangeHandler;
