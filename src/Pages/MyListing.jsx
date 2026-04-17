import React, { use, useEffect } from 'react';
import AuthContext from '../Provider/AuthContext';

const MyListing = () => {
    const {user}=use(AuthContext);
    const email = user?.email;

    useEffect(() => {
  if (!email) return;

  fetch(`http://localhost:3000/addCar?email=${email}`)
    .then(res => res.json())
    .then(data => console.log(data));

},[user,email])



    return (
        <div class="p-6">
  <div class="card bg-base-100 shadow-xl">
    
   
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold">
        My Cars (Provider Dashboard)
      </h2>
      <p class="text-sm text-gray-500">
        Manage all your listed cars
      </p>


      <div class="overflow-x-auto mt-4">
        <table class="table table-zebra w-full">
          
   
          <thead class="bg-base-200 text-base-content">
            <tr>
              <th>Car Name</th>
              <th>Category</th>
              <th>Rent Price</th>
              <th>Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

    
          <tbody>
       
            <tr>
              <td>Toyota Corolla</td>
              <td>Sedan</td>
              <td>$45 / day</td>
              <td>
                <span class="badge badge-success">Available</span>
              </td>
              <td class="flex gap-2 justify-center">
                <button class="btn btn-sm btn-info">Update</button>
                <button class="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>

    
            <tr>
              <td>BMW X5</td>
              <td>SUV</td>
              <td>$120 / day</td>
              <td>
                <span class="badge badge-warning">Booked</span>
              </td>
              <td class="flex gap-2 justify-center">
                <button class="btn btn-sm btn-info">Update</button>
                <button class="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>

    
            <tr>
              <td>Tesla Model 3</td>
              <td>Electric</td>
              <td>$150 / day</td>
              <td>
                <span class="badge badge-success">Available</span>
              </td>
              <td class="flex gap-2 justify-center">
                <button class="btn btn-sm btn-info">Update</button>
                <button class="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>

  </div>
</div>
    );
};

export default MyListing;