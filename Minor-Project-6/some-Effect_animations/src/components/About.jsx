const About = () => {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-sans text-[4vw] leading-[3.5rem]">
        ❤𝑻𝒐 𝑳𝒐𝒗𝒆 𝑾𝒊𝒕𝒉𝒐𝒖𝒕 𝑪𝒐𝒏𝒅𝒊𝒕𝒊𝒐𝒏, 𝒕𝒐 𝒕𝒂𝒍𝒌 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒊𝒏𝒕𝒆𝒏𝒕𝒊𝒐𝒏,𝒕𝒐 𝒈𝒊𝒗𝒆 𝒘𝒊𝒕𝒉𝒐𝒖𝒕
        𝒓𝒆𝒂𝒔𝒐𝒏,❣ 𝒂𝒏𝒅 𝒎𝒐𝒓𝒆 𝒊𝒎𝒑𝒐𝒓𝒕𝒂𝒏𝒕𝒍𝒚 𝒕𝒉𝒊𝒏𝒈𝒔 𝒕𝒐 𝒄𝒂𝒓𝒆 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒆𝒙𝒑𝒆𝒄𝒕𝒂𝒕𝒊𝒐𝒏❤,
        <u>𝒕𝒉𝒂𝒕'𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒖𝒂𝒍 𝒎𝒆𝒂𝒏𝒊𝒏𝒈 𝒐𝒇 𝑳𝒐𝒗𝒆 ❣.</u> <b> By :- 👉 𝘼𝙨𝙝𝙪𝙩𝙤𝙨𝙝</b>
      </h1>
      <div className="w-full flex gap-10 border-t-[1px] pt-8 border-[green] mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl">Our stratg'y :(</h1>
          <button className="px-4 uppercase flex gap-5 items-center py-3 rounded-lg bg-black text-white mt-10">
            Learn More
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-2xl">
          <img
            src="https://img.freepik.com/premium-vector/silhouette-couple-red-heart_23-2147518346.jpg?w=740"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
