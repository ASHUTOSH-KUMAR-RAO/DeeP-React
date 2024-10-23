import React from 'react'
const Background = () => {
  return (
    <>
      <div className='relative z-[2] w-full h-screen'>
        <div className="w-full py-10 font-semibold text-2xl text-gray-400 absolute top-[5%]  flex justify-center">
          Documents
        </div>
        <h1 className="text-[14vw] leading-none tracking-tight absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-700 font-semibold">
          DOCS
        </h1>
      </div>
    </>
  );
}

export default Background
