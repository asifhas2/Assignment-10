import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content pt-16 pb-6 border-gray-500 border-t-1">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img className="h-10 w-10 rounded-full object-cover" src="https://www.shutterstock.com/image-vector/handshake-car-logo-vector-illustration-600nw-2636774943.jpg" alt="" />
            <h2 className="text-xl font-semibold">EasyRent</h2>
          </div>
          <p className="text-sm text-gray-500">
            Your trusted partner for safe, affordable, and convenient car rentals.
          </p>

          
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-gray-600">CATEGORY</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary">SUV</a></li>
            <li><a className="hover:text-primary">Hatchback</a></li>
            <li><a className="hover:text-primary">Luxury Cars</a></li>
            <li><a className="hover:text-primary">Premium Sedans</a></li>
           
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-gray-600">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary">Help & Support</a></li>
            <li><a className="hover:text-primary">Terms & Conditions</a></li>
            <li><a className="hover:text-primary">Privacy Policy</a></li>
            <li><a className="hover:text-primary">Help</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-600">NEWSLETTER</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
          Your journey starts here. Find the perfect car for every trip with easy booking, fair prices, and reliable service you can trust.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-4 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>@ 2021 - Blogy - Designed & Developed by DevMohim</p>

        <div className="flex gap-2 mt-2 md:mt-0">
          <img src="https://img.icons8.com/color/48/paypal.png" className="h-6" />
          <img src="https://img.icons8.com/color/48/amex.png" className="h-6" />
          <img src="https://img.icons8.com/color/48/visa.png" className="h-6" />
        </div>
      </div>
    </footer>

    );
};

export default Footer;