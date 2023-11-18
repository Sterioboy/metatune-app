'use client';

import React, { useEffect, useState } from 'react';
import { useSDK } from '@metamask/sdk-react';
import Link from 'next/link';
import { IDKitWidget } from '@worldcoin/idkit';

import { usePathname } from 'next/navigation';

const ToggleButtonGroup = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(() => pathname);
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const connect = async () => {
    console.log('connect');
    try {
      const accounts: any = await sdk?.connect();
      console.log('accounts', accounts);
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div className="inline-flex rounded bg-none">
      <Link href="/">
        <button
          className={`text-sm px-4 py-2 rounded-full ${
            active === '/' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
          } focus:outline-none`}
        >
          Explore
        </button>
      </Link>

      <Link href="/mytune">
        <button
          className={`text-sm px-4 py-2 rounded-full ${
            active === '/mytune' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
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
        Wallet
      </button>

      <IDKitWidget
        action="sign_in"
        signal="test_signal"
        onSuccess={(response: any) => console.log(response)}
        app_id="app_staging_99b19f7d40189390b56c8ff1d12f6881"
      >
        {({ open }) => (
          <button
            onClick={open}
            className={`text-sm px-4 py-2 rounded-full ${
              active === 'WorldID' ? 'bg-white text-gray-800 shadow' : 'bg-slate-200 text-gray-600'
            } focus:outline-none`}
          >
            WorldID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
};

export default ToggleButtonGroup;
