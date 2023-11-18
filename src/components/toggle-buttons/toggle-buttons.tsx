import React, { useState } from 'react';
import { useSDK } from '@metamask/sdk-react';
import Link from 'next/link';

const ToggleButtonGroup = ({ options }: any) => {
  const [active, setActive] = useState(options[0]);
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts: any = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div className="inline-flex rounded bg-none">
      <Link href="/">
        <button
          onClick={() => setActive('Explore')}
          className={`text-sm px-4 py-2 rounded-full ${
            active === 'Explore' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
          } focus:outline-none`}
        >
          Explore
        </button>
      </Link>

      <Link href="/mytune">
        <button
          onClick={() => setActive('My Tune')}
          className={`text-sm px-4 py-2 rounded-full ${
            active === 'My Tune' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
          } focus:outline-none`}
        >
          My Tune
        </button>
      </Link>

      <button
        onClick={() => {
          setActive('Connect Wallet');

          connect();
        }}
        className={`text-sm px-4 py-2 rounded-full ${
          active === 'Connect Wallet' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
        } focus:outline-none`}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ToggleButtonGroup;
