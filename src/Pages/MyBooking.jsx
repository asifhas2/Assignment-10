import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../Provider/AuthContext";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://smart-car-ren-server.vercel.app/bookings?email=${user.email}`,
    )
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user]);
  console.log(booking);

  return (
    <div className="pt-16 grid md:grid-cols-3 gap-6 p-6">
      {booking.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-xl ">
          <figure>
            <img className="h-[200px] " src={item.carImage} />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-primary">{item.carName}</h2>

            <p>
              <span className="font-semibold">Price:</span> ${item.price} / day
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="badge badge-error">{item.status}</span>
            </p>

            <p className="text-sm text-gray-500">
              {new Date(item.bookingDate).toLocaleDateString()}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Email:</span> {item.userEmail}
            </p>

            <div className="card-actions justify-end mt-3">
              <button className="btn btn-primary btn-sm">View</button>
              <button className="btn btn-error btn-sm">Cancel</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
