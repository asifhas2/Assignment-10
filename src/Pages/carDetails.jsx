import React from "react";
import { useLoaderData, useParams } from "react-router";

const CarDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData();

  const car = datas.find((data) => data._id === id);
  console.log(car);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Car not found</h2>
      </div>
    );
  }

 

  return (
    <div className="min-h-screen pt-20 bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-5xl bg-base-100 shadow-2xl rounded-2xl overflow-hidden">

        <figure className="w-full h-72">
          <img
            src={car.image}
            alt={car.carName}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body grid md:grid-cols-2 gap-6">

   
          <div>
            <h2 className="text-3xl font-bold text-primary">
              {car.carName}
            </h2>

            <p className="mt-3 text-gray-600">
              {car.description}
            </p>

            <div className="mt-5 space-y-2">
              <p><span className="font-semibold">Category:</span> {car.category}</p>
              <p><span className="font-semibold">Location:</span> {car.location}</p>
              <p><span className="font-semibold">Rent Price:</span> ${car.rentPricePerDay} / day</p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className={`badge ${car.status === "Available" ? "badge-success" : "badge-error"}`}>
                  {car.status}
                </span>
              </p>
            </div>

            <button className="btn btn-primary mt-6 w-full md:w-auto">
              Book Now
            </button>
          </div>

   
          <div className="bg-base-200 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Provider Info</h3>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {car.providerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {car.providerEmail}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarDetails;