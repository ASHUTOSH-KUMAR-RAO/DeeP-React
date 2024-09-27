import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //? =>Aur yeha per jo first Function => side-effect Function hai

  // todo=> Aur yeha per jo Second FUnction => wo yeha per function as clean rakhne mein help krta hai , iska mtlb hai , ki "wo component se unMount ho gya mtlb haat gya waha se"

  //! => Aur jo yeha per third hai wo comma seperated Dependency hai,[] isko hi hum dependency list bolte hai

  // Types Of Variation :-

  //* Variation 1:- iska mtlb hota hai run on every Rander hoga

  // useEffect(() => {
  //   alert(
  //     "ye first variation hai aur ye haar randering per run hoga hai , any how but hoga jarur hoag"
  //   );
  // });

  // todo=> Variation 2:- iska mtlb hai ye shirf first rander pe hi chaleta hai aur 2nd ya 3rd ya kuch bhi hua first ke shiva to ye nhi chalega.

  // useEffect(()=>{
  // alert("Mai Shirf First rander mein hi run karunga , aur iske alawa kabhi nhi run hoga 😢")
  // },[]);

  // ! => Variation 3:- iska mtlb hai ye tabhi chalega jaab hum apne web-pages kuch bhi update karenge,shirf issi time chalega.

  // useEffect(()=>{
  // alert("ye per jaab-jaab hum count ki value ko update shirf tabhi chalega , nhi nhi chalega")
  // },[count])

  // * => Variation 4:- Multiepel Dependency , jaise hum dekhte hai apne website mein ki kuch update krte hai wo poora page re-randering isi ke wajah se hota hai .

  // useEffect(() => {
  //   alert(
  //     "Basically iska mtlb hota hai ,chahe count update ho ya phir total chalega ye dono case mein "
  //   );
  // }, [count, total]);

  //!=> Variation 5:- isme cleanUp function bhi add karenge, aur hum cleanup function ko isiliye ad kiya jo bhi purana value hai usko unMount kar dega aur phir new vale de dega

  // useEffect(() => {
  //   alert("Total ko updatr kr liya hai");
  //todo=>   return () => {   => isko hum cleanup Function bolte hai
  //     alert(
  //       "ye taab run hota hai jaab count ko hum apne UI se unMount kaar dete hai saab "
  //     );
  //   };
  // }, [total]);

  const handelClick = () => {
    setCount(count + 1);
  };

  const handelTotal = () => {
    setTotal(total + 1);
  };
  return (
    <>
      <button onClick={handelClick}> press here </button>
      <br />
      count : {count}
      <br />
      <button onClick={handelTotal}> press Total </button>
      <br />
      TotalMove is : {total}
    </>
  );
};

export default App;
