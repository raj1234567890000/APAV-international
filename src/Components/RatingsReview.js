import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lokesh",
    location: "Jhajjar, Haryana",
    rating: 5,
    product: "Usha Water Cooler",
  },
  {
    name: "Harkesh",
    location: "Delhi, Delhi",
    rating: 4,
    product: "FRP RO Plant",
  },
  {
    name: "BeggaTm",
    location: "Gurugram, Haryana",
    rating: 5,
    product: "Industrial RO Membranes",
  },
];

export default function RatingsReviews() {
  const totalReviews = 61;
  const avgRating = 4.2;

  const ratingBreakdown = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 7 },
    { stars: 3, percent: 7 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 16 },
  ];

  const satisfaction = [
    { label: "User Satisfaction", value: 90 },
    { label: "Response", value: 89 },
    { label: "Quality", value: 92 },
    { label: "Delivery", value: 88 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Ratings & Reviews</h2>

        {/* Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold">{avgRating} / 5</div>
            <div className="flex justify-center md:justify-start mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`${
                    i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-gray-500 mt-1">{totalReviews} reviews</div>
          </div>

          {/* Rating Breakdown */}
          <div className="mt-6 md:mt-0 grid grid-cols-1 gap-2 md:grid-cols-5 md:gap-4">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-2">
                <span className="w-8 text-sm">{r.stars} star</span>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-yellow-400 h-2 rounded"
                    style={{ width: `${r.percent}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-gray-600">{r.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Satisfaction Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {satisfaction.map((s) => (
            <div key={s.label} className="bg-white p-4 rounded-xl shadow text-center">
              <div className="text-xl font-bold">{s.value}%</div>
              <div className="text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* User Reviews */}
        <div className="space-y-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold">{rev.name}</h4>
                  <p className="text-gray-500 text-sm">{rev.location}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < rev.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Product Name:</strong> {rev.product}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
