"use client"
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function AddToInquiryButton({ onClick }) {
  const [added, setAdded] = useState(false);

  const handleButtonClick = () => {
    onClick();
    setAdded(true);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        added ? 'bg-gray-400 cursor-not-allowed' : ''
      }`}
      disabled={added}
    >
      {added ? 'Added to Inquiry List' : 'Add to Inquiry'}
    </button>
  );
}
