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

    -  1.Varable( ye to noraml si baat hai sabko pta hoga)
    -  2.Functions (isese hum state ko change kr sekte hai )

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
  <div id="user-name">{props.name}</div>  // aise hi pass krte hai props
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




