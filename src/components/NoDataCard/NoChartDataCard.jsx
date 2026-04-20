import React from 'react';
import { FaChartSimple } from 'react-icons/fa6';

const NoChartDataCard = () => {
    return (
        <div className="flex items-center justify-center  w-11/12 max-w-325 mx-auto h-[70vh]">
            <div className="bg-base-300 shadow-md rounded-xl p-6 text-center border border-gray-600 block w-full md:w-200 h-50">

                {/* Icon */}
                <div className=" flex justify-center items-center text-5xl mb-3"><FaChartSimple /></div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-700">
                    No Chart Data Available
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 mt-2 text-sm">
                    There is no data to display in the chart right now.
                </p>
            </div>
        </div>
    );
};

export default NoChartDataCard;