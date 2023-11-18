import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`absolute top-2 right-2 text-xl ${liked ? 'text-red-500' : 'text-gray-300'}`}
      onClick={toggleLike}
      aria-label={liked ? 'Unlike' : 'Like'}
    >
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default LikeButton;
