import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Button from "../../shared/components/FormElements/Button";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>
        <img src={logo} alt="logo" />
      </h1>

      <div className="home-img"></div>

      <div className="home-nav">
        <Link to="/new" className="add_item_btn">
          <Button>ჩანაწერის დამატება</Button>
        </Link>

        <Link to="/lists" className="list_item_btn">
          <Button>ჩანაწერების სია</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
