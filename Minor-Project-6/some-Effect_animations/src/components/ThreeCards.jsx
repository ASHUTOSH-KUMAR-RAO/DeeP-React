import React from "react";

const ThreeCards = () => {
  return (
    <div className="w-full h-full bg-black  px-28 relative ">
      <h1 className=" absolute top-10 font-extrabold text-6xl bg-[lightgrey] px-3 py-3 rounded-xl text-black left-4">
        {" "}
        => what's your choise......👉
      </h1>
      <div className="w-full h-screen bg-black flex items-center px-215 gap-5">
        <div className="cardcontainer w-1/2  h-[45vh] ">
          <div className=" relative card rounded-lg w-full h-full bg-[lightseagreen] flex items-center justify-center ">
            <img
              className="w-60 rounded-xl object-cover"
              src="https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button className="absolute bottom-6 left-6 px-6 py-1 border-2 rounded-full hover:scale-75 font-semibold">
              &copy;Sweet Poison 👽
            </button>
          </div>
        </div>
        <div className="cardcontainer flex gap-6 w-1/2 h-[45vh]  ">
          <div className="card relative rounded-lg  w-full h-full bg-[#4d232395] justify-center flex items-center ">
            <img
              className="w-60 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1459369510627-9efbee1e6051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button className="absolute bottom-6 left-6 px-6 py-1 border-2 rounded-full hover:scale-75 font-semibold">
              &copy;Always
            </button>
          </div>
          <div className="card relative rounded-lg  w-full h-full bg-[#9bf3ef79] flex items-center justify-center ">
            <img
              className="w-60 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1718891332671-b8de1e3ee0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button className="absolute bottom-6 left-6 px-6 py-1 border-2 rounded-full hover:scale-75 font-semibold">
              &copy;Love This ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
