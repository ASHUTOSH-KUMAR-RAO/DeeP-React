
const Card = (props) => {
  return (
    <div>
       <input type="text" onChange={(e)=>props.setName(e.target.value)} /> {/* hum yeha per isiliye ye saab kaar rehe hai kyuki hum kuch bhi yeha per change karenge to wo change ho jaye name variable ke andar bhi isiliye hum yeha event ko handling kr rehe hai,aur ye saab karne ke liye setName Function ko call kr rehe hai  */}

       <h1>hum yeha name variable ke andar sabhi value ko pass kr rehe by the help of event handling aur ye mai child hu: {props.name}</h1>
    </div>
  )
}

export default Card;
