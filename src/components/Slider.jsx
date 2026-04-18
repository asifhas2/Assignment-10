import React from 'react';

const Slider = () => {
    return (
         <div className="carousel   h-[250px] md:h-[300px] lg:h-[350px]  overflow-hidden"> 

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item pt-10  relative w-full ">
        <img className='w-[100%]'
          src="https://static.vecteezy.com/system/resources/previews/047/462/120/non_2x/dark-purple-gradient-elegant-background-vector.jpg"
        />
        <div className="absolute flex justify-center items-center h-full left-10 text-white">
          
          <img src="https://cdn.smartslider3.com/wp-content/uploads/slider684/sportscar-fc-1.png"
          className="md:w-[50%]" alt="" />
          
        </div>
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
         <img
          src="https://images8.alphacoders.com/138/1387562.jpg"
          className="w-full object-cover"
        />
        
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cdn.mos.cms.futurecdn.net/CFaRozpoNpyjZtLm7K7crV.jpg"
          className="w-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-10 text-white">
         
        </div>
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
    );
};

export default Slider;