'use client';

import Link from 'next/link';
import { useAccount } from 'wagmi'

// You would typically fetch this data from a backend or state management store
const leaderboardData = [
  { id: 1, trackName: 'Increase Project Nice', artistName: 'Victoria Clements', movement: 3 },
  { id: 2, trackName: 'Not Always Like', artistName: 'Brian White', movement: -1 },
  { id: 3, trackName: 'Bill Guess Beautiful', artistName: 'Mark White', movement: 0 },
  { id: 4, trackName: 'Probably Town', artistName: 'Riley Stewart DVM', movement: -2 },
  { id: 5, trackName: 'Long Senior Time Maybe', artistName: 'Renee Greer', movement: 1 },
  { id: 6, trackName: 'Act Still Card Standard', artistName: 'Olivia Reed', movement: 4 },
  { id: 7, trackName: 'TV Themselves Democrat Mr', artistName: 'Brandon Kennedy', movement: -1 },
];

const LeaderboardItem = ({ rank, trackName, artistName, movement }: any) => {
  const movementSymbol = movement > 0 ? '↑' : movement < 0 ? '↓' : '—';
  const movementColor = movement > 0 ? 'text-green-500' : movement < 0 ? 'text-red-500' : 'text-gray-500';

  return (
    <Link href="/artist">
      <div className="flex items-center px-4 py-2 bg-gray-100 mb-2 rounded shadow">
        <div className="text-lg font-semibold mr-4">{rank}</div>
        <div className="flex-grow">
          <div className="font-medium">{trackName}</div>
          <div className="text-sm text-gray-600">{artistName}</div>
        </div>
        <div className={`font-bold ${movementColor}`}>
          {movementSymbol} {Math.abs(movement)}
        </div>
      </div>
    </Link>
  );
};

export default function Leaderboard() {
  const { address } = useAccount()

  console.log(address)

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Leaderboard</h2>
      <div>
        {leaderboardData.map((item, index) => (
          <LeaderboardItem
            key={item.id}
            rank={index + 1}
            trackName={item.trackName}
            artistName={item.artistName}
            movement={item.movement}
          />
        ))}
      </div>
    </div>
  );
}
