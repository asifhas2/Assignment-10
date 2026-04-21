import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Card from "../components/Card";
import TopRatedCars from "../components/TopRatedCar";
import { useLoaderData } from "react-router";

const Home = () => {
  const carsData = useLoaderData();
  const [topCar, setTopCar] = useState([]);

  useEffect(() => {
    fetch("https://smart-car-ren-server.vercel.app/topCars")
      .then((res) => res.json())
      .then((data) => setTopCar(data));
  }, []);

  console.log(topCar);

  return (
    <div className="pt-10 bg-base-200">
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {carsData.slice(0, 6).map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
      <div>
        <section class="py-12 bg-gray-100">
          <div class="max-w-6xl mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Why Rent With Us
            </h2>
            <p class="text-gray-600 mb-10">
              We provide the best car rental experience with reliable service
              and great value.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div class="text-4xl mb-4">🚗</div>
                <h3 class="text-xl font-semibold mb-2">Easy Booking</h3>
                <p class="text-gray-600 text-sm">
                  Book your car in just a few clicks with our simple and fast
                  booking system.
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div class="text-4xl mb-4">💰</div>
                <h3 class="text-xl font-semibold mb-2">Affordable Rates</h3>
                <p class="text-gray-600 text-sm">
                  Enjoy competitive pricing with no hidden charges for all
                  vehicles.
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div class="text-4xl mb-4">🤝</div>
                <h3 class="text-xl font-semibold mb-2">Trusted Providers</h3>
                <p class="text-gray-600 text-sm">
                  We partner with verified and trusted car owners for your
                  safety.
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div class="text-4xl mb-4">📞</div>
                <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
                <p class="text-gray-600 text-sm">
                  Our support team is always available to assist you anytime,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section class="py-16  to-gray-900 text-white">
          <div class="max-w-7xl mx-auto px-5">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
              Top Rated Cars
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topCar.map((data) => (
                <div class="group backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-500">
                  <img
                    src={data.image}
                    class="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div class="p-5">
                    <h3 class="text-xl text-black font-semibold">
                      Tesla Model S
                    </h3>
                    <p class="text-sm text-black">{data.category}</p>

                    <div class="flex justify-between items-center mt-4">
                      <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
                      <span class="font-bold text-black">
                        ${data.rentPricePerDay}/day
                      </span>
                    </div>

                    <button class="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div>
        <section class="py-16 bg-gray-100">
          <div class="max-w-7xl mx-auto px-5">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
              What Our Customers Say
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">
                <p class="text-gray-600 mb-4">
                  "Amazing service! Booking was super easy and the car was in
                  perfect condition."
                </p>

                <div class="flex items-center gap-4">
                  <img
                    src="https://www.shutterstock.com/image-photo/bold-portrait-photo-half-body-260nw-2606421347.jpg"
                    class="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h4 class="font-semibold">Rahim Ahmed</h4>
                    <span class="text-sm text-gray-400">Dhaka</span>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">
                <p class="text-gray-600 mb-4">
                  "Affordable price and great support. Highly recommended!"
                </p>

                <div class="flex items-center gap-4">
                  <img
                    src="https://cdn.create.vista.com/api/media/small/220729086/stock-photo-smiling-handsome-adult-man-looking-camera-isolated-white"
                    class="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h4 class="font-semibold">Karim Hasan</h4>
                    <span class="text-sm text-gray-400">Chittagong</span>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">
                <p class="text-gray-600 mb-4">
                  "Best rental experience I've ever had. Will definitely use
                  again!"
                </p>

                <div class="flex items-center gap-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR077PE7SFy74yT4AW2PBeMqEhcslD0ZI98dQ&s"
                    class="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h4 class="font-semibold">Nusrat Jahan</h4>
                    <span class="text-sm text-gray-400">Sylhet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
