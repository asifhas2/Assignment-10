import React, { use } from "react";
import Swal from "sweetalert2";
import AuthContext from "../Provider/AuthContext";

const AddCart = () => {
  const { user } = use(AuthContext);
  const handelAddCard = async (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(Number(form.carPrice.value));
    const addCarData = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.carCategory.value,
      image: form.carPhoto.value,
      location: form.carLocation.value,
      rentPrice: form.carPrice.value,
      providerName: form.name.value,
      providerEmail: form.email.value,
      status: "available",
    };
    fetch("https://smart-car-ren-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCarData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Add car successful",
            text: "Add car successful",
          });
        }
        console.log(data);
      });
  };

  return (
    <div class="min-h-screen bg-base-200 flex items-center justify-center py-15 ">
      <div class="card w-full max-w-3xl bg-base-100 shadow-2xl rounded-2xl">
        <div class="card-body">
          <h2 class="text-3xl font-bold text-center text-primary mb-6">
            🚗 Add New Car
          </h2>

          <form
            onSubmit={handelAddCard}
            class="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div class="form-control md:col-span-2">
              <label class="label">
                <span class="label-text font-semibold">Car Name</span>
              </label>
              <input
                required
                type="text"
                name="carName"
                placeholder="e.g. Toyota Corolla"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control md:col-span-2">
              <label class="label">
                <span class="label-text font-semibold">Image URL</span>
              </label>
              <input
                required
                name="carPhoto"
                type="text"
                placeholder="https://source.unsplash.com/..."
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">Category</span>
              </label>
              <select
                required
                name="carCategory"
                class="select select-bordered w-full"
              >
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">
                  Rent Price (per day)
                </span>
              </label>
              <input
                required
                type="number"
                name="carPrice"
                placeholder="e.g. 2000"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">Location</span>
              </label>
              <input
                required
                type="text"
                name="carLocation"
                placeholder="e.g. Dhaka,Bangladesh"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">Provider Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                class="input input-bordered w-full bg-base-200"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">Provider Email</span>
              </label>
              <input
                required
                name="email"
                type="text"
                defaultValue={user?.email}
                class="input input-bordered w-full bg-base-200"
              />
            </div>

            <div class="form-control md:col-span-2">
              <label class="label">
                <span class="label-text font-semibold">Description</span>
              </label>
              <textarea
                name="description"
                class="textarea textarea-bordered h-24"
                placeholder="Write car details..."
              ></textarea>
            </div>

            <div class="md:col-span-2 mt-4">
              <button type="submit" class="btn btn-primary w-full text-lg">
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
