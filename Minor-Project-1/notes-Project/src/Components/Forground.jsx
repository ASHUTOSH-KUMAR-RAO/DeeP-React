import React, { useRef, useState } from "react";
import Card from "./Card";

const Forground = () => {

  const ref = useRef(null);
  const data = [
    {
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad,repudiandae expedita asperiores obcaecati ",
      file: "1gb",
      closeorAvailable: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "pink" },
    },
    {
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad,repudiandae expedita asperiores obcaecati ",
      file: "1gb",
      closeorAvailable: true,
      tag: { isOpen: true, tagTitle: " Upload Here", tagColor: "red" },
    },

    {
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad,repudiandae expedita asperiores obcaecati ",
      file: "1gb",
      closeorAvailable: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "pink" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 flex h-full w-full flex-wrap gap-10 z-[3] p-5"
    >
      {data.map((items, index) => (
        <Card data={items} refrence={ref} /> //
      ))}
    </div>
  );
};

export default Forground;
