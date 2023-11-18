import Button from '../button/button';

const EventCard = ({ eventName, description, heartsRequired }: any) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-5 bg-white">
      <h2 className="text-xl font-bold mb-2">{eventName}</h2>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <p className="text-green-500 text-lg mb-4">Required {heartsRequired} hearts to participate</p>
      <Button variant="secondary">Join this event</Button>
    </div>
  );
};

export default EventCard;
