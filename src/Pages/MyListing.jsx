import React, { use, useEffect, useState } from "react";
import AuthContext from "../Provider/AuthContext";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = use(AuthContext);
  const [listing, setListing] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const email = user?.email;

  useEffect(() => {
    if (!email) return;

    fetch(`http://localhost:3000/cars?email=${email}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [user, email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This car will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cars/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Deleted:", data);

            setListing((prev) => prev.filter((car) => car._id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your car has been deleted.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          });
      }
    });
  };

  return (
    <div className="py-15">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">My Cars</h2>
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Rent Price</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {listing.map((car) => (
                  <tr key={car._id}>
                    <td>{car.carName}</td>
                    <td>{car.category}</td>
                    <td>${car.rentPrice} / day</td>
                    <td>
                      <span className="badge badge-success">{car.status}</span>
                    </td>

                    <td className="flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedCar(car)}
                        className="btn btn-sm btn-info"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(car._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedCar && (
            <dialog className="modal" open>
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-3">Update Car</h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.target;

                    const updatedCar = {
                      carName: form.carName.value,
                      category: form.category.value,
                      rentPricePerDay: form.rentPricePerDay.value,
                      location: form.location.value,
                      image: form.image.value,
                      status: form.status.value,
                    };

                    fetch(`http://localhost:3000/cars/${selectedCar._id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(updatedCar),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log("Updated:", data);
                        setListing((prev) =>
                          prev.map((car) =>
                            car._id === selectedCar._id
                              ? { ...car, ...updatedCar }
                              : car,
                          ),
                        );

                        setSelectedCar(null);
                        Swal.fire({
                          title: "Car update successful!",
                          text: "You clicked the button!",
                          icon: "success",
                        });
                      });
                  }}
                  className="space-y-2"
                >
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car Name:
                    </span>
                  </label>
                  <input
                    name="carName"
                    defaultValue={selectedCar.carName}
                    className="input input-bordered w-full"
                  />
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car category:
                    </span>
                  </label>
                  <input
                    name="category"
                    defaultValue={selectedCar.category}
                    className="input input-bordered w-full"
                  />
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car price:
                    </span>
                  </label>
                  <input
                    name="rentPricePerDay"
                    defaultValue={selectedCar.rentPricePerDay}
                    className="input input-bordered w-full"
                  />
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car location:
                    </span>
                  </label>
                  <input
                    name="location"
                    defaultValue={selectedCar.location}
                    className="input input-bordered w-full"
                  />
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car Image:
                    </span>
                  </label>
                  <input
                    name="image"
                    defaultValue={selectedCar.image}
                    className="input input-bordered w-full"
                  />
                  <label class="label">
                    <span class="label-text font-semibold">
                      Update Car status:
                    </span>
                  </label>
                  <input
                    name="status"
                    defaultValue={selectedCar.status}
                    className="input input-bordered w-full"
                  />

                  <input
                    value={selectedCar.providerName}
                    disabled
                    className="input input-bordered w-full bg-gray-100"
                  />

                  <input
                    value={selectedCar.providerEmail}
                    disabled
                    className="input input-bordered w-full bg-gray-100"
                  />

                  <div className="modal-action">
                    <button className="btn btn-primary">Save</button>

                    <button
                      type="button"
                      className="btn"
                      onClick={() => setSelectedCar(null)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyListing;
