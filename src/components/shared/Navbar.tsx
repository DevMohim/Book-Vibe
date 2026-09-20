import Link from 'next/link';
import React from 'react';
const navLinks = (
  <>
    <li className="text-[#131313] text-xl btn-active cursor-pointer font-semibold border-0 px-5 py-3 rounded-lg transition duration-150 hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] font-work-sans">
      <Link href='/'>Home</Link>
    </li>
    <li className="text-[#131313] text-xl btn-active cursor-pointer font-semibold border-0 px-5 py-3 rounded-lg transition duration-150 hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] font-work-sans">
      <Link href='/listed-books'>Listed Book</Link>
    </li>
  </>
);
const Navbar = () => {
   return (
     <nav className="bg-base-100 shadow-sm">
       <div className="navbar container mx-auto">
         <div className="navbar-start">
           <div className="dropdown">
             <div
               tabIndex={0}
               role="button"
               className="btn btn-ghost lg:hidden"
             >
               <svg
                 aria-label="Menu"
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 {" "}
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M4 6h16M4 12h8m-8 6h16"
                 />{" "}
               </svg>
             </div>
             <ul
               tabIndex={-1}
               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex items-center gap-4"
             >
               {navLinks}
             </ul>
           </div>
           <h1 className=" text-3xl font-bold font-work-sans">Book Vibe</h1>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="px-1 flex items-center gap-2">{navLinks}</ul>
         </div>
         <div className="navbar-end space-x-4">
           <button className="px-7 py-3 rounded-lg bg-[#23BE0A] text-xl font-semibold text-white cursor-pointer font-work-sans">
             Sign In
           </button>
           <button className="px-7 py-3 rounded-lg bg-[#59C6D2] text-xl font-semibold text-white cursor-pointer font-work-sans">
             Sign In
           </button>
         </div>
       </div>
     </nav>
   );
};

export default Navbar;