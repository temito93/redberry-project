import gelIcon from "../../../assets/images/gel.svg";
import "./input.scss";

const Input = (props) => {
  if (props.element === "radio") {
    return (
      <div className={`radio_wrapper ${props.class}`}>
        <input
          checked={props.checked}
          type="radio"
          value={props.value}
          name={props.name}
          id={props.id}
          onChange={props.onChange}
        />
        <label htmlFor={props.htmlFor}>{props.label}</label>
      </div>
    );
  }

  return (
    <div className={`input_default ${props.class}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        pattern={props.pattern}
      />
      {props.gel && <img className="gel__icon" src={gelIcon} alt="icon" />}

      {props.text && (
        <span className={`${props.desktopClass}`}>{props.text}</span>
      )}
      {props.mobile && (
        <span className={props.mobileClass}>{props.mobileText}</span>
      )}
    </div>
  );
};

export default Input;
