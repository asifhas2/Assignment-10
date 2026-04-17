import React from 'react';

const Card = () => {
    return (
        <div class="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden p-3 ">
  
  <img  className=''
    src="https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg" 
    alt="Car Image"
    class="w-full h-48 object-cover"
  />
  <div class="p-4 space-y-2">
    <h2 class="text-xl font-bold text-gray-800">
      Toyota Corolla
    </h2>

   
    <p class="text-lg text-green-600 font-semibold">
      $3500 / day
    </p>
    <p class="text-gray-600">
      <span class="font-medium">Type:</span> Sedan
    </p>

   
    <p class="text-gray-600">
      <span class="font-medium">Provider:</span> ABC Rentals
    </p>

   
    <a 
      class="block text-center mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
    >
      View Details
    </a>

  </div>
</div>
    );
};

export default Card;