import { Link } from "react-router-dom";
import PrevBtn from "../prevBtn/PrevBtn";

import "./itemInfo.scss";

const ItemInfo = (props) => {
  return (
    <div className="item_info__container">
      <div className="item_title__wrapper">
        <Link to="/lists">
          <PrevBtn classes="info_prev__btn" />
        </Link>
        <h2>ლეპტოპის ინფო</h2>
      </div>

      <div className="item_info__wrapper">
        <div className="item__container">
          <div className="item__person_info">
            <img className="item_person_img" src={props.image} alt="img" />
            <div className="item_person_desc">
              <div className="item__titles">
                <div className="person_first person_common">სახელი:</div>
                <div className="person_team person_common">თიმი:</div>
                <div className="person_position person_common">პოზიცია:</div>
                <div className="person_email person_common">მეილი:</div>
                <div className="person_number person_common">ტელ. ნომერი:</div>
              </div>

              <div className="items__titles__info">
                <div className="item_person_name">{props.name}</div>
                <div className="item_person_team">{props.team}</div>
                <div className="item_person_position">{props.position}</div>
                <div className="item_person_email">{props.email}</div>
                <div className="item_person_number">{props.phone}</div>
              </div>
            </div>
          </div>

          <div className="item_middle__info">
            <div className="item_first__container">
              <div className="column_one__container">
                <div className="column_one">
                  <div className="laptop__info">ლეპტოპის სახელი:</div>
                  <div className="laptop__info">ლეპტოპის ბრენდი:</div>
                  <div className="laptop__info">RAM:</div>
                  <div className="laptop__info">მეხსიერების ტიპი:</div>
                </div>

                <div className="column_one__desc">
                  <div className="laptop__desc">{props.laptopName}</div>
                  <div className="laptop__desc">{props.laptopBrand}</div>
                  <div className="laptop__desc">{props.ram}</div>
                  <div className="laptop__desc">{props.driveType}</div>
                </div>
              </div>

              <div className="column_two__container">
                <div className="column_two">
                  <div className="cpu__info">CPU:</div>
                  <div className="cpu__info">CPU-ს ბირთვი:</div>
                  <div className="cpu__info">CPU-ს ნაკადი:</div>
                </div>

                <div className="column_two__desc">
                  <div className="cpu__desc">{props.cpu}</div>
                  <div className="cpu__desc">{props.core}</div>
                  <div className="cpu__desc">{props.thread}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="item__bellow">
            <div className="item__bellow_wrapper">
              <div className="bellow_column_one">
                <div className="bellow_item_name">
                  <span>ლეპტოპის</span> მდგომაროება:
                </div>
                <div className="bellow_item_name">ლეპტოპის ფასი:</div>
              </div>

              <div className="bellow_column_one__info">
                <div className="bellow_item_desc">{props.state}</div>
                <div className="bellow_item_desc">{props.price} ₾</div>
              </div>
            </div>

            <div className="bellow_column_two">
              <div className="bellow_item_name">შეძენის რიცხვი:</div>
              <div className="bellow_item_desc">{props.purchaseDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
