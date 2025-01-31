import { useEffect,useState } from "react";

const Circle = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(()=>{
window.addEventListener("mousemove", (event)=>{

  let mouseX = event.clientX; //? basically humko ye btayega jaab hum mouse move window/screen per rehe hai belong to x axis per
  let mouseY = event.clientY; // ! basically humko ye btayega jaab hum mouse move window per/screen  per rehe hai belong to y axis per

  let deltaX = mouseX- window.innerWidth/2; // * basically humko ye btayega window ki width ka half (isme window.innerWidth window ki  poori width ko btata hai ,lekin jaab hum isko devide krenge 2 se mtlb half ho jayega as that as simple)

  let deltaY = mouseY- window.innerHeight/2; // * basically humko ye btayega window ki height ka half (isme window.innerHeight window ki  poori height ko btata hai ,lekin jaab hum isko devide krenge 2 se mtlb half ho jayega as that as simple)


  let angle = Math.atan2(deltaY,deltaX); // ? basically humko ye btayega angle between x and y axis
  // ! ye angle radian me hoga ,humko ise degree me convert karna hoga

  let angleDegree = angle * 180 / Math.PI; // * basically humko ye btayega angle between x and y axis in degree
  setRotate(angleDegree-180); //? humko rotate state me store krenge angleDegree me jo ki humko btayega angle between x and y axis in degree

})
  })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className=" relative h-full w-full bg-center bg-cover bg-[url('https://img.freepik.com/free-photo/carbon-footprint-technology-collage_23-2149508677.jpg?t=st=1735914516~exp=1735918116~hmac=c570776fccded4ce2674b181ca043d9dca894959bc293313262640c2dd992ebe&w=996')]">
        <div className=" absolute flex gap-32 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="bg-green-200 w-[15vw] flex justify-center items-center  h-[15vw] rounded-full ">
            <div className="bg-yellow-200 w-[11vw]  h-[11vw] rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 "
              >
                <div className="bg-blue-200 w-[3vw]  h-[3vw] rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="bg-green-200 w-[15vw] flex justify-center items-center rounded-full h-[15vw]  ">
            <div className="bg-yellow-200 w-[11vw] relative h-[11vw] rounded-full ">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 "
              >
                <div className="bg-blue-200 w-[3vw]  h-[3vw] rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
