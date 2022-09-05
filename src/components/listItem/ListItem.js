import { Link } from "react-router-dom";
import ItemInfo from "../itemInfo/ItemInfo";
import "./listItem.scss";

const ListItem = ({ img, name, pc, id }) => {
  return (
    <div className="list_item_container">
      <div className="list_item_wrapper">
        <img src={img} alt="img" />
        <div className="list_item_info">
          <div className="list_person__name">{name}</div>
          <div className="list_pc__name">{pc}</div>
          <div className="list_more">
            <Link to={`${id}`}>მეტის ნახვა</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
