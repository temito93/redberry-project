import "./button.scss";

const Button = ({ type, children, onClick, classes }) => {
  return (
    <button type={type} onClick={onClick} className={`button ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
