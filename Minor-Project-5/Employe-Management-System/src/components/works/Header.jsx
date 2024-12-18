const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl">
        Hello <br />
        <span className="font-medium text-3xl">Ashutosh 👋</span>
      </h1>
      <button className="bg-sky-400 text-black p-3 rounded-lg font-extrabold">Log Out </button>
    </div>
  );
};

export default Header;
