const Button = ({ onClick, type = "button" }) => {
  return (
    <button onClick={onClick} className="Button" type={type}>
      Load more
    </button>
  );
};
export default Button;