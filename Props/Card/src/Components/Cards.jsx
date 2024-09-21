import "./cards.css";

const Cards = (props) => {
  return (
    <>
      <div className="user-cards" style={props.style}>
        <div id="user-name">{props.name}</div>  
        <img id="Image" src={props.image} alt="" />
      </div>
    </>
  );
};

export default Cards;
