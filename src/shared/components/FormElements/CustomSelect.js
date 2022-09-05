import Select from "react-select";
import "./customSelect.scss";

const CustomSelect = ({
  styles,
  placeholder,
  value,
  onChange,
  classes,
  options,
  name,
  onFocus,
  className,
}) => {
  return (
    <div className={`select_container ${classes}`}>
      <Select
        name={name}
        options={options}
        value={value}
        placeholder={placeholder}
        styles={styles}
        onChange={onChange}
        isSearchable={false}
        onFocus={onFocus}
        className={className}
      />
    </div>
  );
};

export default CustomSelect;
