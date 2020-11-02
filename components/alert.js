import React from "react";
import Image from 'next/image'

const alert = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-purple-700 rounded">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
   
      
      
        <div className="w-full relative flex justify-between lg:w-auto px-4 ">
        <Image src="/coco.png" alt="..." className="h-8 sm:h-8" />
          <a className=" text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white hover:text-pink-700"  href="/">
         Cancunbylocals
   
          </a>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            } id="example-navbar-info">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white" href="#pablo">
                CORONAVIRUS
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white" href="#pablo">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white" href="#pablo">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white">
                Shopping
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white" href="#pablo">
                Explore
              </a>
            </li>
            <li className="nav-item">
              
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-pink-500  hover:bg-white" href="#pablo">
          

           Login
              </a>
            </li>
            <li className="nav-item">
            <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0">
          If you live in Cancun, Join Us!
        </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default alert;
