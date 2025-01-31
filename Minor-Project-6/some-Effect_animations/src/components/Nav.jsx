import React from 'react'
const Nav = () => {
  return (
    <div className=" fixed z-[999] w-full px-14 py-4 flex justify-between items-center text-white">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/monogram-logo-design-with-letters-h_1048-19294.jpg?uid=R155049047&ga=GA1.1.485562742.1718285833&semt=ais_hybrid"
          alt="logo"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights","contacts"].map((link, index) => (
          <a key={index} className={`text-lg font-semibold capitalize hover:cursor-pointer ${index === 4 && "ml-28"}`}>
           {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
