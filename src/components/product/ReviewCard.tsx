import React from 'react';

interface ReviewProps {
  userName: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export default function ReviewCard({ userName, rating, comment, date, images }: ReviewProps) {
  return (
    <div className="border border-luxury-200 rounded-lg p-6 hover:shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-lg">{userName}</h4>
          <p className="text-luxury-600 text-sm">{date}</p>
        </div>
        <div className="text-yellow-500">
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>
      </div>

      {/* Comment */}
      <p className="text-luxury-700 mb-4">{comment}</p>

      {/* Images */}
      {images && images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Review"
              className="w-16 h-16 rounded object-cover hover:scale-110 transition cursor-pointer"
            />
          ))}
        </div>
      )}

      {/* Helpful */}
      <div className="flex gap-4 text-sm">
        <button className="text-luxury-600 hover:text-luxury-gold transition">👍 Helpful</button>
        <button className="text-luxury-600 hover:text-luxury-gold transition">👎 Not Helpful</button>
      </div>
    </div>
  );
}
