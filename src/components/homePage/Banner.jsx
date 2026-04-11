import React from 'react';
import heroImage from '../../assets/hero_img.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh]  max-w-325 mx-auto rounded-lg mt-8 md:mt-12 p-20">
            <div className="hero-content flex-col lg:flex-row-reverse w-full  justify-between">
                <img
                    src={heroImage}
                    className="max-w-full md:max-w-sm rounded-lg shadow-2xl"
                />
                <div className='text-center md:text-left'>
                    <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success text-white font-bold mt-12 ">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;