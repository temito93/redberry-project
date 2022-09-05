import { useContext, useEffect } from "react";

import ListItem from "../../components/listItem/ListItem";
import PrevBtn from "../../components/prevBtn/PrevBtn";
import { token } from "../../token/token";
import { fetchLists } from "../../api/lists/fetchLists";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { FormDataContext } from "../../shared/context/form-data";
import LoadingSpinner from "../../shared/components/loadingSpinner/LoadingSpinner";
import "./list.scss";
import { Link } from "react-router-dom";

const List = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const { list, setList } = useContext(FormDataContext);

  useEffect(() => {
    fetchLists(sendRequest, setList, token);
  }, [sendRequest, setList]);

  return (
    <div className="list_container">
      <div className="list_title__wrapper">
        <Link to="/">
          <PrevBtn classes="title_class" />
        </Link>
        <h2>ჩანაწერების სია</h2>
      </div>

      {isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <div className="list__wrapper">
          <div className="lists__container">
            {list.map((item) => {
              return (
                <ListItem
                  id={item.id}
                  key={item.id}
                  img={item.image}
                  name={item.name + " " + item.surname}
                  pc={item.pcname}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
