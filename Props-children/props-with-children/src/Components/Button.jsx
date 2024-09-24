const Button = (props) => {
  return (
    <>
      <button onClick={props.moveKaro}>
        {/* {props.name} */}
        click Me
      </button>
      {props.children}
    </>
  );
};

export default Button;
