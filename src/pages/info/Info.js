import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { token } from "../../token/token";
import { fetchItemInfo } from "../../api/info/info";
import ItemInfo from "../../components/itemInfo/ItemInfo";
import { FormDataContext } from "../../shared/context/form-data";
import LoadingSpinner from "../../shared/components/loadingSpinner/LoadingSpinner";
import "./info.scss";

const Info = (props) => {
  const { personInfo, setPersonInfo } = useContext(FormDataContext);
  const { sendRequest, isLoading } = useHttpClient();
  const { itemId } = useParams();

  useEffect(() => {
    fetchItemInfo(sendRequest, setPersonInfo, itemId, token);
  }, [sendRequest, itemId, setPersonInfo]);

  return personInfo.map((item) => {
    return (
      <>
        {isLoading ? (
          <div className="center">
            <LoadingSpinner asOverlay />
          </div>
        ) : (
          <ItemInfo
            id={itemId}
            to="/lists"
            key={itemId}
            name={`${item.firstname} ${item.surname}`}
            team={item.team_name}
            position={item.position_name}
            email={item.email}
            phone={item.phone}
            laptopName={item.laptop_name}
            laptopBrand={item.brand_name}
            ram={item.ram}
            driveType={item.hard_drive_type}
            cpu={item.cpu_name}
            core={item.cpu_cores}
            thread={item.cpu_threads}
            state={item.state}
            price={item.price}
            purchaseDate={item.purchase_date}
            image={item.image}
          />
        )}
      </>
    );
  });
};

export default Info;
