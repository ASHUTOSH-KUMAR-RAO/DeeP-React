import React,{ useState , useCallback , useEffect,useRef} from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // todo=> useRef Hook :-

  const passwordRef  = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789"; //todo basically hum yeha per kaar rehe hai ki string ke alwa number bhi to ho sekte hai n
    }
    if (charAllowed) {
      str += "~!@#$%^&*(){}|"; //? aur similarly yeha per bhi sring ke alawa special char bhi to ho sekte hai n
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass =pass + str.charAt(char); //! charAt basically ek js ka methoda hota hoki ek Array-string se ek character ko nikalta hai
    }

    setPassword(pass); //? ye password uper se liya hamne jaha per hamne state ke andar banaya tha .
  }, [length, numberAllowed, charAllowed, setPassword]); // todo => basically yeha per hum dependencies pass karte jo ki array ke form mein pass hota hai hamesa. 

  const copyPassword = useCallback(()=>{
    // passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGen()},[length,numberAllowed,charAllowed,setPassword]) //* hum aise hi call krte hai useEffect ke andar aur same ye bhi useCallback ki jaise hi hota hai 

  return (
    <>
      <div className="w-full max-w-md rounded-lg shadow-md px-4 my-8 text-blue-400 bg-gray-500 mx-auto mb-3">
        <h1 className="text-center mx-2 my-4 ">Password Generator</h1>
        <div className="flex shadow-md overflow-hidden mb-4 rounded-lg">
          <input
            type="text"
            value={password}
            placeholder="Enter your password"
            className="outline-none w-full py-1 px-3 flex "
            readOnly

            ref={password}
          />

          <button className="bg-blue-700 rounded-md px-2 shrink-0 py-0.5 " onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className=""> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
