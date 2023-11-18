'use client';

import { useState } from 'react';

// Dummy data
const likedTracks = [
  { id: 1, name: 'Track name', artist: 'Artist name', movement: 3 },
  { id: 2, name: 'Track name', artist: 'Artist name', movement: 12 },
  // ... other tracks
];

const supportedArtists = [
  { id: 1, name: 'Artist name' },
  { id: 2, name: 'Artist name' },
  // ... other artists
];

const registeredEvents = [
  { id: 1, name: 'Event name', description: 'Description here', heartsUsed: 23 },
  { id: 2, name: 'Event name', description: 'Description here', heartsUsed: 31 },
  // ... other events
];

const StatCard = ({ number, label }: any) => (
  <div className="w-full text-center flex flex-col items-center justify-center py-4 shadow-lg rounded-lg m-2">
    <div className="text-xl font-semibold">{number}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

const TrackItem = ({ name, artist, movement }: any) => (
  <div className="flex items-center justify-between py-2 px-4 shadow rounded-lg m-2">
    <div className="rounded-full bg-gray-300 w-10 h-10"></div>
    <div className="flex-grow mx-4">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-500">{artist}</div>
    </div>
    <div className="text-green-500">{movement > 0 ? `↑ ${movement}` : movement}</div>
  </div>
);

const ArtistItem = ({ name }: any) => (
  <div className="flex items-center py-2 px-4 shadow rounded-lg m-2">
    <div className="rounded-full bg-gray-300 w-10 h-10"></div>
    <div className="ml-4 font-medium">{name}</div>
  </div>
);

const EventItem = ({ name, description, heartsUsed }: any) => (
  <div className="flex flex-col py-2 px-4 shadow rounded-lg m-2">
    <div className="font-medium">{name}</div>
    <div className="text-sm text-gray-500">{description}</div>
    <div className="text-sm text-gray-500">Used {heartsUsed} hearts</div>
  </div>
);

export default function MyTune() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <h1 className="text-2xl font-bold mb-2">My tune</h1>
      <div className="flex justify-around">
        <StatCard number={30} label="Liked" />
        <StatCard number={102} label="Heart tokens" />
        <StatCard number={5} label="Artist Supporting" />
      </div>
      <section>
        <h2 className="text-xl font-semibold my-2">Registered events</h2>
        {registeredEvents.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </section>
      <section>
        <h2 className="flex justify-between items-center text-xl font-semibold my-4">
          You liked{' '}
          <a href="/liked" className="text-sm">
            View all
          </a>
        </h2>
        {likedTracks.map((track) => (
          <TrackItem key={track.id} {...track} />
        ))}
      </section>
      <section>
        <h2 className="flex justify-between items-center text-xl font-semibold my-4">
          You've supported{' '}
          <a href="/supported" className="text-sm">
            View all
          </a>
        </h2>
        {supportedArtists.map((artist) => (
          <ArtistItem key={artist.id} {...artist} />
        ))}
      </section>
    </div>
  );
}
