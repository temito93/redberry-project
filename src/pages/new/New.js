import { useContext } from "react";
import EmployeeInfo from "../../components/form/EmployeeInfo";
import redberryLogo from "../../assets/images/redberry-logo.svg";
import LaptopDescription from "../../components/form/LaptopDescription";
import PrevBtn from "../../components/prevBtn/PrevBtn";
import { defaultValues, FormDataContext } from "../../shared/context/form-data";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { token } from "../../token/token";
import { Link, useNavigate } from "react-router-dom";

import "./new.scss";

const New = () => {
  const { sendRequest } = useHttpClient();
  const { formData, setFormData, setFile, file, page, setPage } =
    useContext(FormDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(formData);
    if (
      formData.laptop_brand_id &&
      file &&
      !formData.laptop_name.hasError &&
      formData.laptop_cpu &&
      !formData.laptop_cpu_cores.hasError &&
      !formData.laptop_cpu_threads.hasError &&
      !formData.laptop_ram.hasError &&
      !formData.laptop_hard_drive_type.hasError &&
      formData.laptop_state &&
      formData.laptop_price.value > 0
    ) {
      const formatedData = new FormData(e.target);

      formatedData.append("token", token);
      formatedData.append(
        "laptop_brand_id",
        Number(formData.laptop_brand_id.id)
      );
      formatedData.append("laptop_cpu", formData.laptop_cpu.value);
      formatedData.append("laptop_image", file);
      formatedData.append("position_id", Number(formData.position_id.id));
      formatedData.append("team_id", Number(formData.team_id.id));

      try {
        await sendRequest(
          "https://pcfy.redberryinternship.ge/api/laptop/create",
          "post",
          formatedData,
          {
            Accept: "application/json",
          }
        );
      } catch (err) {}
      localStorage.clear("items");
      setFormData(() => {
        return defaultValues;
      });
      setFile(null);
      navigate("/success");
      setPage(1);
    } else {
      setFormData((prev) => {
        localStorage.setItem(
          "items",
          JSON.stringify({
            ...prev,
            isFormValid: false,
            secondFormValid: false,
            checkSecondForm: false,
            secondPage: true,
          })
        );
        return {
          ...prev,
          isFormValid: false,
          secondFormValid: false,
          checkSecondForm: false,
          secondPage: true,
        };
      });
    }
  };
  return (
    <div className="new_container">
      <div className="mobile_container">
        <Link to="/">
          <PrevBtn />
        </Link>

        <div className="title_container">
          <div className="title">
            <h3 className={`${page === 1 ? "active" : ""}`}>
              თანამშრომლის ინფო
            </h3>
            <h3 className={`${page === 2 ? "active" : ""}`}>
              ლეპტოპის მახასიათებლები
            </h3>
          </div>

          <div className="mobile_title">
            {page === 1 && <h3>თანამშრომლის ინფო</h3>}
            {page === 2 && <h3>ლეპტოპის მახასიათებლები</h3>}
            <span className="page_number">{page}/2</span>
          </div>
        </div>
      </div>

      <form className="add_item__form" onSubmit={submitHandler}>
        <div className={`emp__container ${page === 2 ? "d-none" : ""} `}>
          <EmployeeInfo />
        </div>

        <div
          className={`emp__container  ${page === 1 ? "d-none" : ""}
          `}
        >
          <LaptopDescription />
        </div>
      </form>

      <div className="logo">
        <img src={redberryLogo} alt="logo" />
      </div>
    </div>
  );
};

export default New;
