import React from "react";
import LineGraph from "../Components/LineGraph";
import PieChart from "../Components/PieChart";

const ContributorDashboard = () => {
  const monthlyEarningsCurrentYear = [500, 700, 800, 600, 1000, 900, 1100, 1200, 1500, 1300, 1400, 1600];
  const monthlyEarningsLastYear = [50, 600, 850, 500, 950, 850, 1300, 800, 400, 200, 1000, 500];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const categoryData = [30, 50, 10, 20];
  const categories = ["Videos", "Images", "Audios", "Templates"];

  return (
    <div className="w-full p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-5 pt-12 lg:pt-24 pb-4">
        <div className="lg:w-1/2 w-full flex flex-col gap-3">
          <div className="w-full text-white text-center py-8 lg:py-12 rounded-2xl bg-gradient-to-r from-[#4546ED] to-[#272887]">
            <h1 className="text-4xl lg:text-5xl">$ 20000</h1>
            <h2 className="text-xl lg:text-2xl">Yearly Earning</h2>
          </div>
          <div className="w-full text-white text-center py-8 lg:py-12 rounded-2xl bg-gradient-to-r from-[#4546ED] to-[#272887]">
            <h1 className="text-4xl lg:text-5xl">$ 2000</h1>
            <h2 className="text-xl lg:text-2xl">Monthly Earning</h2>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col lg:flex-row gap-3 p-3 bg-[#1C1C24] rounded-xl">
          <div className="w-full lg:w-1/2">
            <div className="w-full my-2 text-white text-center py-8 lg:py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]">
              <h1 className="text-4xl lg:text-5xl">2000</h1>
              <h2 className="text-xl lg:text-2xl">Total Videos</h2>
            </div>
            <div className="w-full my-2 text-white text-center py-8 lg:py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]">
              <h1 className="text-4xl lg:text-5xl">1000</h1>
              <h2 className="text-xl lg:text-2xl">Total Images</h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full my-2 text-white text-center py-8 lg:py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]">
              <h1 className="text-4xl lg:text-5xl">1000</h1>
              <h2 className="text-xl lg:text-2xl">Total Audios</h2>
            </div>
            <div className="w-full my-2 text-white text-center py-8 lg:py-10 rounded-2xl bg-black bg-gradient-to-r from-[#4546ED] to-[#272887]">
              <h1 className="text-4xl lg:text-5xl">500</h1>
              <h2 className="text-xl lg:text-2xl">Total Templates</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/2 p-2">
          <LineGraph currentYearData={monthlyEarningsCurrentYear} lastYearData={monthlyEarningsLastYear}  labels={months} />
        </div>
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <PieChart data={categoryData} labels={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorDashboard;

