import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import popUpImg from "../../../assets/images/success.svg";
import "./popUp.scss";

const PopUp = () => {
  return ReactDOM.createPortal(
    <div className="popUp_bg">
      <div className="popUp_info_bg">
        <div className="popUp_info_container">
          <div className="popUp_img_container">
            <img src={popUpImg} alt="img" />
          </div>
          <h2>
            ჩანაწერი <span> დამატებულია!</span>
          </h2>
          <div className="list_menu_btn">
            <Link to="/lists">სიაში გადაყვანა</Link>
          </div>
          <div className="main_menu_btn">
            <Link to="/">მთავარი</Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default PopUp;
