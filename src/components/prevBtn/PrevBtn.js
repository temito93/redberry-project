import { Link } from "react-router-dom";
import prevBtn from "../../assets/images/Vector.svg";

import "./prevBtn.scss";

const PrevBtn = ({ classes, to }) => {
  return (
    <div className={`prev_container ${classes}`}>
      <div className="prev_page">
        <img src={prevBtn} alt="img" />
      </div>
    </div>
  );
};

export default PrevBtn;
