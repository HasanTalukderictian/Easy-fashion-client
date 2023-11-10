import React from 'react';
import Model from '../../../../assests/easy.jpg';

const Banner = () => {
  return (
    <div>
      <div className='bg-[#ccffff] h-[540px] lg:flex md:flex sm:flex'>
        <div className='w-full lg:w-1/2 md:w-1/2 sm:w-full rounded flex items-center justify-center'>
          <div>
            <div className='my-6 '>
              <p className='text-xl text-[#ff9900] text-center sm:text-center md:text-center lg:text-left'>
                -----New Collection-------
              </p>
              <h2 className='text-5xl font-bold my-2 text-center sm:text-center md:text-center lg:text-left'>
                Choose Your  Favourite <br /> 
                <span className='text-orange-600 '>  Collection</span>
              </h2>
              <h2 className='text-xl my-7 text-center sm:text-center md:text-center lg:text-left'>
                You can have anything <br />
                you want in life if you  <br />
                dress for it. —Edith Head
              </h2>
               <p className='my-10 text-[#000066] text-end mr-8'>Always With You ---Easy Fashion</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 md:w-1/2 sm:w-full rounded'>
          <img className="w-full h-full rounded object-fill" src={Model} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;