// src/Pages/ContributorDashboard.js
import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const ContributorDashboard = () => {
  return (
    <DashboardLayout userType="contributor">

      <div className=' flex lg:flex-row flex-col items-center justify-center w-full gap-5 py-24'>
        <div className="lg:w-1/2 w-full flex flex-col gap-3">
          <div className='w-full  text-white text-center py-12 rounded-2xl bg-gradient-to-r from-[#4546ED] to-[#272887]'>
            <h1 className='text-5xl'>20000</h1>
            <h2 className='text-2xl'>Total Users</h2>
          </div>
          <div className='w-full  text-white text-center py-12 rounded-2xl bg-gradient-to-r from-[#4546ED] to-[#272887]'>
            <h1 className='text-5xl'>2000</h1>
            <h2 className='text-2xl'>Total Contributors</h2>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-row gap-3 p-3 bg-white rounded-xl">
          <div className="w-1/2">
            <div className='w-full my-2 text-white text-center py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]'>
              <h1 className='text-5xl'>2000</h1>
              <h2 className='text-2xl'>Total Videos</h2>
            </div>
            <div className='w-full my-2 text-white text-center py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]'>
              <h1 className='text-5xl'>1000</h1>
              <h2 className='text-2xl'>Total Images</h2>
            </div>
          </div>
          <div className="w-1/2">
            <div className='w-full my-2 text-white text-center py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]'>
              <h1 className='text-5xl'>1000</h1>
              <h2 className='text-2xl'>Total Audios</h2>
            </div>
            <div className='w-full my-2 text-white text-center py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]'>
              <h1 className='text-5xl'>500</h1>
              <h2 className='text-2xl'>Total Template</h2>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContributorDashboard;
