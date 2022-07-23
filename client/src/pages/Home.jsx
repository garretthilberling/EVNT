import React from 'react';

// Styles
import {Link} from "react-router-dom";
// Pages


const Home = () => {
  return (
    <>
    <div className='text-center text-2xl py-40'>
    <p className='landing-text text-6xl'>Save Your Plan-It and Get Organized!</p>
    <div className='pt-3'>
      
      <Link to="/login">
      <button className=" pt-3 mx-2 pb-3 pl-12 pr-12 text-2xl ring-4 font-semibold text-center text-white transition-all rounded-full lg:ml-5  focus:outline-none  lg:font-medium">
        Login
        </button>
        </Link>

        <Link to="/signup">
      <button 
      className=' pt-3 pb-3 mx-2 ring-4 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all  rounded-full  lg:ml-5  focus:outline-none  lg:font-medium'>
        Sign Up
        </button>
        </Link>
    </div>
    </div>
    </>
  )
}

export default Home

