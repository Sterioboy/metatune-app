'use client';

import Card from '@/components/card/card';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import Loader from '@/components/loader/loader';
import Button from '@/components/button/button';
import EventCard from '@/components/card/event-card';

export default function Artist() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <Card extra="items-center flex-col w-full h-full bg-cover">
        {/* Background and profile */}
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(img/banners/banner.png)` }}
        >
          <div
            className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 bg-cover"
            style={{ backgroundImage: `url(img/avatars/avatar1.png)` }}
          />
        </div>

        {/* Name and position */}
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-navy-700 text-xl font-bold dark:text-white">Lila Everwood</h4>
          <h5 className="text-base font-normal text-gray-600">Electro-Folk</h5>

          <div className="mt-2">
            <Button variant="primary">Follow</Button>
          </div>
        </div>

        {/* Post followers */}
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">3</h4>
            <p className="text-sm font-normal text-gray-600">Tracks</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">926</h4>
            <p className="text-sm font-normal text-gray-600">Likes</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">44</h4>
            <p className="text-sm font-normal text-gray-600">Supporters</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">3 Tracks</h2>

        <div className="flex gap-3 overflow-x-auto overflow-y-none py-3">
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              <Card
                extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                /* onClick={() => {
                  dispatch(setAudioIndex(0));
                  dispatch(setIsStartListen(true));
                }} */
              >
                <div
                  className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                  style={{
                    backgroundImage: `url(img/nfts/NFT-2.jpg)`,
                  }}
                />
              </Card>

              <Card
                extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                /* onClick={() => {
                  dispatch(setAudioIndex(1));
                  dispatch(setIsStartListen(true));
                }} */
              >
                <div
                  className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                  style={{ backgroundImage: `url(img/nfts/NFT-4.jpg)` }}
                />
              </Card>

              <Card
                extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                /* onClick={() => {
                    dispatch(setAudioIndex(2));
                    dispatch(setIsStartListen(true));
                  }} */
              >
                <div
                  className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                  style={{
                    backgroundImage: `url(img/nfts/NFT-3.jpg)`,
                  }}
                />
              </Card>
            </>
          )}
        </div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">1 Upcoming Event</h2>

        <div className="flex gap-3 overflow-x-auto py-3">
          <EventCard eventName="Event Name" description="Description" heartsRequired={40} />
        </div>
      </div>
    </div>
  );
}
