import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-screen bg-gray-500 p-20 flex">
      <div className="w-1/2 h-full flex justify-between flex-col font-mono">
        <div className="heading">
          <h1 className="text-[8vw] uppercase -mb-20 font-extrabold text-black ">
            Eye-
          </h1>
          <h1 className="text-[8vw] uppercase -mb-20 font-extrabold text-black ">
            Opening
          </h1>
        </div>

        <div>
          <img
            className="w-20 h-20 rounded-full"
            src="https://img.freepik.com/free-vector/monogram-logo-design-with-letters-h_1048-19294.jpg?uid=R155049047&ga=GA1.1.485562742.1718285833&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-[5vw] uppercase -mb-20 font-extrabold text-black ">
          Presentations
        </h1>
      </div>
    </div>
  );
}

export default Footer
