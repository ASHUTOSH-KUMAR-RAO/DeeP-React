# Learn React Begginer To Advance :-

**Note-1** = For Web Purpose ke liye hum use krte hai React - Dom 👍

**Not2-2** = For Mobile Purpose ke liye hum use krte hai React-Native 👍

**Note-3** = Aur React mein jaab hum kuch import krte hai main file mein as a component to usko hum hamesa 1st leter uppercase mein hi hona chaiye its a very compulsory , other wise react error de dega jo web per ealy show krta hai .

**Note-4** = <></> => Baiscally this is called is fragement jo pure react ke code ko as a wrapper ka kaam krta hai .

[Every-Thing-About-React](https://react.dev/learn)

## State ManageMent :-



- ### Hooks =>

**Note-1** :- Hook ,is nothing but jo react humko Functionalty/Feature provide karwata hai hum usko Hook ke through hi use krte hai , and then hum react mein jitne functionalty hote unko easly use kr sekte hai

**Note-2** :- sabse important baat ki hum pehchane kaise hi ke ye ek hook hai , to iska simple sa idea hai ki jitna bhi reak meini hook hote hai un sabka prefix mein use likha hota hai underrated but bahut important hai hai ye ideas

- ### useState Hook =>

  - [useState Here](https://react.dev/reference/react/useState)

  - Aur useState hame 2 things provide karwata hai in react :-

  - 1.Varable( ye to noraml si baat hai sabko pta hoga)
  - 2.Functions (isese hum state ko change kr sekte hai )

  - Aur humko pta hai ki react mein sabhi component apne sath state rakh sekte hai . state mtlb like a variables declare krna in simple terms mein samjha jaye to.❤️

  ```React
  const [count,setCount] = useState(0);
  ```

  - count = Variable

  - setCount = Function

  - (0) = values (initial value bolte hai isko hum update bhi kr sekte hai function ki help se)

  - Aur iska sabse achi baat ye hai ki hum useState ke function mein kuch bhi change krte aab jaha -jaha wo naam dikhega waha per useState update/randering kr dega krdega on browser.(Beauty of useState ❤️❤️❤️)

## Props :-

- [Props-Here](https://react.dev/learn/passing-props-to-a-component)

- Jaab bhi hamein data transper krna hota hai components ke bich mein taab hum props use krte hai .

- aur jo kuch humko props ke andar access krna hota hai to hum {props.anything} lga ker use kr sekte hai

```jsx
<div id="user-name">{props.name}</div> // aise hi pass krte hai props
```

## Props(property) Passing via a children or functions :-

```jsx
<Cards>
  <h1>hello ji kaise ho aap saab</h1>
  <p>Waise acha padha rehe hai aap Bhaiya </p>
  <p>i love this course</p>
</Cards>
```

- **NOTE :-** jo kuch bhi hum opening aur closng tag andar likhte hai usko hum children content bolte hai aur wo kisi bhi type ka kyu n likhe wo children content hi hota hai.<Cards>children content </Cards>

- **NOTE:-** Aur iska use hum isiliye krte hai ki maan lijiye kabhi kabhi bahut data aur usko wrap krna hai normally hum ek container bana kr uske andar saab data ko as a children likh sekte hai aur phir us container ko hum as props pass kr sekte hai ye hota hai iska benifits., aur generally ye higher order component mein bahut-bahut jyada kaam ata hai .

## Passing by A Function :-

```jsx
const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button moveKaro={handlClick}> {/* isko hum bolte function pass karna in elements */}
        <h1>{count}</h1>
      </Button>
```

## Lifting State Imp For the Interview Pov :-

- iski Need hamein Isiliy hoti hai kyuki aisa case bhi to aa sakta hai n jaha per hmko children to Parent Element ko bhejna hoga .

- Kyuki Parent to Children to props send krta hai n .

## Conditional Randering :-

### Four Way se hum Conditional Randering kara sekte hai :-
 
   - [Conditional-Randering](https://react.dev/learn/conditional-rendering)
- if-else
- ternary Operator
- Logical Operator
- Early return kar gye hum.

## Event Handling :-



- Event Handler ko hum kisi bhi element per click kr ke use kr skte hai.

- Imidiately invoke function iska use krte hai.hum react mein kisi bhi element per click kr ke usko event handler use krte hai. aur ye bahut kaam use hota hai react mein kyuki iska mtlb hi hai instant invoke ho jata hai invoke in the sence ki call krna function ko .

```jsx
const handleClick = () => {
  console.log("Button is clicked");
};

<button onClick={handleClick}>Click me</button>;
```

- **NOTE:-** Syntax of Imidiately invoke function

```jsx
<button onClick={alert("Button is clicked")}>Click me</button>
```

## useEffect-Hook :-

 - [useEffect-Here](https://react.dev/reference/react/useEffect)

- About Hook :-

  - useEffect Hook basically ye bhi ek react ka hi hook kyuki starting mein use likha ho

  - aur iska purpose ye hai side Effect ko generate krta hai .

- **Side Effect ...?**

  - jaise ki maan lijiye hamne ek project ,aur phir uss projoect ke randering hone per ek API call marna hai to

  - to API call krna hai ek tarah ka Effect ho gya aur , project rander hona ek tarah ka event ho gya .

  - basically hame ye pta chalta hai kisi bhi project ya kuch karne per usese jo bhi effect padta hai usese use Effect bolte hai

  - aur maje ki baat ye hai yehi saab side Effect generate ya phir manage krne ka kaam useEffectHook krta hai .

  - Aur Hamesa Randering Hone se Just pehle execute ho jata hai

- **Syntax**

```jsx
//* Variation 1:- iska mtlb hota hai run on every Rander hoga

useEffect(() => {
  alert(
    "ye first variation hai aur ye haar randering per run hoga hai , any how but hoga jarur hoag"
  );
});
```

```jsx
// Variation 2:- iska mtlb hai ye shirf first rander pe hi chaleta hai aur 2nd ya 3rd ya kuch bhi hua first ke shiva to ye nhi chalega.

useEffect(() => {
  alert(
    "Mai Shirf First rander mein hi run karunga , aur iske alawa kabhi nhi run hoga 😢"
  );
}, []);
```

```jsx
// ! => Variation 3:- iska mtlb hai ye tabhi chalega jaab hum apne web-pages kuch bhi update karenge,shirf issi time chalega.

useEffect(() => {
  alert(
    "ye per jaab-jaab hum count ki value ko update shirf tabhi chalega , nhi nhi chalega"
  );
}, [count]);
```

```jsx
// * => Variation 4:- Multiepel Dependency , jaise hum dekhte hai apne website mein ki kuch update krte hai wo poora page re-randering isi ke wajah se hota hai .

useEffect(() => {
  alert(
    "Basically iska mtlb hota hai ,chahe count update ho ya phir total chalega ye dono case mein "
  );
}, [count, total]);

```

```jsx

//!=> Variation 5:- isme cleanUp function bhi add karenge, aur hum cleanup function ko isiliye ad kiya jo bhi purana value hai usko unMount kar dega aur phir new vale de dega

  useEffect(() => {
    alert("Total ko updatr kr liya hai");
    return () => {
      //todo => isko hum cleanup Function bolte hai
      alert(
        "ye taab run hota hai jaab count ko hum apne UI se unMount kaar dete hai saab "
      );
    };
  }, [total]);

```

## useContext-hook

- [useContext-here](https://react.dev/reference/react/useContext)

**Prop-Driling** :- Basically iska mtlb hota yedi ek Component Data send kaar raha hai aur wo data shirf kisi ek ko hi bhejna hai to uss case mein hum "prop-Driling" ka use krte hai.


### How to Work useContext API or Hook :-

- Basically iska use hum isiliye krte hai jaise ki hum shirf individual component se data  lekar aur kisi individual component ke pass bhejt hai thik , but in dono ke bich mein jitna bhi extra component ata hai usko manage krne ke liye hum useContext Hook ka use krte hai.
  
  - Basicallly iske andar hum shirf three steps ke andar hi poora process karte hai 
    
      - pehle context ko  create krte hai.

      - Phir context ko Provide karo , 😀😀ye bolega ki mai data provider hu mai provide kaar raha hu 

      - aur last mein context ko consume bhi karo, 😢 aur ye bola ki mujhe data ki need ki hai to mai data consume karunga


```jsx
import React, { createContext, useState } from "react";
import Child1 from "./Components/Child1";

//! Step 1:  hum aise Context ko create krte hai 🍎
const userContext = createContext(); 

// ? Step 2: wrap all the child in side the provider, aab yeha provider ka mtlb ki hum ye chah rehe ki koi bhi consumer baan sakta hai means ki koi bhi data fetch kaar sakta hai , to isiliye sabko provider bananpadega n tabhi to provide kara payega n .

// todo => Step 3 : ek variable bnayenge (useState) aur usko provider mein as a value pass kr denge 

// * Step 4:- aab kya consumer ke andar jayenge aur sabko consume kaar lenge

const App = () => {

  const [User,setUser] = useState({name: "Ashutosh Kumar rao"});
  return (
    <>
    <h1>hi baby kaise ho aap </h1>

    <userContext.Provider value={User}>
      <Child1 />
    </userContext.Provider>
    </>
  );
};cls


export default App;
export {userContext} //? isko export bahut jruri hota hai 
```


## Routing :- 

- [Router Is Here](https://reactrouter.com/en/main/routers/create-browser-router)

    - Why We Use :-
         
         - yedi dekha jaye hum routing ke bina ONLY SPA hi bana sekte hai ,aur routing ki jarurat hame isiliye padi ki kabhi hota hai n website me ki humne tap aur hmko uss link uss specific page per lekar chala gya to isi kaam ko karne ke liye hum routing use krte hai.

         - Aur latest app ya kisi bhi complex app mein Browser Routing hi use hoti hai , aur iska use karne ke liye hmko router dom access hona jaruri hai aur isiliye hmko isko intsall karna padega is command se "npm i react-router-dom"=> yehi command hai jisese hum access kr sekte hai . 

```jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Awash from "./Components/Awash";
import Abhishek from "./Components/Abhishek";
import Anjali from "./Components/Anjali";
import Jyoti from "./Components/Jyoti";

const router = createBrowserRouter(
  //! aur is paranthasis ke andar hamesa array hi hoga (arrays of routes jitna bhi routes create karenge )
  [
    { path: "/", element: <Awash /> }, //? Aur Basically hum aise hi routing create krte hai
    { path: "/Abhishek", element: <Abhishek /> },
    { path: "/Anjali", element: <Anjali /> },
    { path: "/Jyoti", element: <Jyoti /> },

    // todo=> aur Basically haar ek route kuch aise dikhta hai, aur haar ek rout ke andar ek path rehta hai jo btayega ki ek base URL hai like(www.something) aise karke hota hai ek path,aur phir iske baad isme ek element bhi hota aur ye isiliye hota ki humko kya bhejna hai iske andar means kaun sa element
  ]
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      {/*  basically humne yeha per ye isiliye jisese hum bta sekte hai maine kiss path mein kya send kiya hai means , application context deta hai ki jitna bhi add hai wo saab page reload karwana hai, aur dhyan rehe ki jaab bhi run karaw usese pehle RouterProvider ko declare karna nhi bhulna hai in any houw */}
    </>
  );
};

export default App;
```
 
 ### Aab hum yeha yeha ye kaar rehe hai kyuki react hum krte hai specially SPA banane ke liye jaab hum kisi link tap kre to wo poore page re-randering n kare isiliiye hum yeha ancor tag ki place per link tag use kiya jiska attribute hai to="",hota hai 


 ```jsx
 import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Awash</Link>
        </li>
        <li>
          <Link to="/Abhishek">Abhishek</Link>
        </li>
        <li>
          <Link to="/Anjali">Anjali</Link>
        </li>
        <li>
          <Link to="/Jyoti">Jyoti</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
```

#### Isko hum aise access krte hai :-

```jsx

 path: "/",
    element: 
      <div>
        <Awash />
        <Navbar />
      </div>
```

## useParams :-

 -  yedi hme dekhe to jaab kabhi bhi hum website per search krte hai to www.something.com//id..... aise krke kuch hota hai. aur isko hum react ke word mein bole to parameter bolte aur isi Paramtere ko pass krne ke liye humko useParams ki jarurat padti hai .


 ## useNavigation Hook :-

  - Basically ye wo kaam karta jaise mere ko ek page se dusre page per jana hai to humko full fom randering karaye bina taab use hota hai useNavigation hook.


  ```jsx

  import React from 'react'
import { useNavigate } from 'react-router-dom';

const Awash = () => {

  const Navigation = useNavigate();

  const handleClick2 =()=>{
    Navigation("/Abhishek");
  }
  return (
    <div>
      <h1>Kaise ho Awash beta ❤️</h1>
      <button onClick={handleClick2}>
        move to Abhishek Page
      </button>
    </div>
  )
}

export default Awash
```

## Nested Routing :-

  - aur dekha jaye to jaise hum normal routing krte hai same aise hi nested routing bhi hota hai isme difference ye hota hai ,ki is case mein layer waise kaam krte hai ,jaise ki hmko dasboard ke andar ke andar kisi course ke andar jana phir waha se uske andar hi kisi personal course chose krna aur phir usme se kisi ek hi question ko solve krna hai."www.30days.com/dasboard/Fullstack/js.

  ```jsx 

  {
    path: "/Anjali",
    element: (
      <div>
        <Anjali />
        <Navbar />
      </div>
    ),
    children: [
      { path: "Course", element: <Course /> },
      { path: "AIML", element: <AIML /> },
    ],
  },

  ```

   - aab jaise yeha per maine anjali ke liye nested routing kiya hai .Container

**NOTE :** aur dhayn rehe jaab humko parent element ke andar child element ko route karana hota hai to uss case mein <Outlet/> iss tag ka use krte hai 