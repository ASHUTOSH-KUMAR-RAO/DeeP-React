import { useState } from "react";

const Loggin = ({ handleLogin }) => {
  console.log(handleLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    // ! basically isko hm bolte hai Two way binding :-
    e.preventDefault(); // ye hamne isiliye aisa kiya kyuki ye apne default behavior ko rok dega
    handleLogin(email,password)
    // console.log(`Email is :  ${email}`, `Password is:  ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" p-[200px] rounded-xl border-2 border-green-300 h-screen ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex-col items-center justify-center flex"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email..."
            className="mb-7 p-4 rounded-lg border-2 border-blue-400 bg-transparent placeholder:text-gray-500 outline-none"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter your password.."
            className="mt-7 p-4 rounded-lg border-2 border-blue-400 bg-transparent placeholder:text-gray-500 outline-none"
          />
          <button className="mt-9 bg-pink-400 px-16 py-3 rounded-md text-blue-200 font-bold">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loggin;
