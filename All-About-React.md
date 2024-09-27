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
