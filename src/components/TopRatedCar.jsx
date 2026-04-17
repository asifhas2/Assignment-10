import { motion } from "framer-motion";

const cars = [
  {
    name: "Tesla Model S",
    type: "Electric • Premium",
    price: "$120/day",
    img: "https://i.ibb.co/5xZ3R0p/car1.jpg",
  },
  {
    name: "BMW X5",
    type: "SUV • Luxury",
    price: "$95/day",
    img: "https://i.ibb.co/0jqHpnp/car2.jpg",
  },
  {
    name: "Toyota Corolla",
    type: "Sedan • Economy",
    price: "$50/day",
    img: "https://i.ibb.co/F0n0FfG/car3.jpg",
  },
];

const TopRatedCars = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Rated Cars
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
        {cars.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg"
          >
            <motion.img
              src={car.img}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-300 text-sm">{car.type}</p>

              <div className="flex justify-between mt-4">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="font-bold">{car.price}</span>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="mt-4 w-full bg-blue-500 py-2 rounded-lg"
              >
                Rent Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedCars;