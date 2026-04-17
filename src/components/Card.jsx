import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    return (
        <div class=" bg-white rounded-2xl  hover:shadow-xl transition duration-300 overflow-hidden p-3 ">
  
  <img  className=''
    src={data.image} 
    alt="Car Image"
    class="w-full h-48 object-cover"
  />
  <div class="p-4 space-y-2">
    <h2 class="text-xl font-bold text-gray-800">
      {data.carName}
    </h2>

   
    <p class="text-lg text-green-600 font-semibold">
      ${data.rentPricePerDay} / day
    </p>
    <p class="text-gray-600">
      <span class="font-medium">Type:</span>{data.category}
    </p>

   
    <p class="text-gray-600">
      <span class="font-medium">Provider:</span>{data.providerName}
    </p>

   
    <Link to={`/details/${data._id}`} 
      class="block text-center mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
    >
      View Details
    </Link>

  </div>
</div>
    );
};

export default Card;