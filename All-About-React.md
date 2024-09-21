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

  ```react
  <div id="user-name">{props.name}</div>  aise hi pass krte hai props
  ``` 