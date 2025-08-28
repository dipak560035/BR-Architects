// import React from 'react'

export default function TechCard({ title, description, colorFrom, colorTo }) {
  return (
    
<div className="bg-white rounded-lg shadow-md p-6 text-center
 flex flex-col justify-between">
      <div>
        <h2
          className="text-2xl font-bold text-white py-4 rounded-t-md"
          style={{
            background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          }}
        >
          {title}
        </h2>
        <p className="text-gray-700 mt-4 mb-6">
          {description}
        </p>
      </div>
      <button className="bg-pink-500 hover:bg-pink-600
       text-white font-semibold py-2 px-4 rounded">
        Read more
      </button>
    </div>
  );
}
