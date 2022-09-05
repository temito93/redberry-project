import { useContext, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import CustomSelect from "../../shared/components/FormElements/CustomSelect";
import { employeeSelect } from "../../styles/selectStyles";
import { FormatInput } from "../../helper/input/checkNotNumber";
import { teamApi } from "../../api/teams/teams";
import { positionApi } from "../../api/positions/positions";
import { FormDataContext } from "../../shared/context/form-data";
import { checkIsValid } from "../../shared/util/checkIsValid";
import "./employeeInfo.scss";

const EmployeeInfo = ({ nextClick }) => {
  const { sendRequest } = useHttpClient();
  const { formData, setFormData, empSelect, setEmpSelect, page, setPage } =
    useContext(FormDataContext);

  const getItems = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    if (getItems) {
      setFormData((prev) => {
        return { ...prev, ...getItems };
      });
    }
  }, []);

  const empHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const { hasError, error } = checkIsValid(name, value);

    if (getItems) {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...getItems,
          [name]: {
            ...getItems[name],
            value: value.trim(),
            hasError: hasError,
            errorMessage: error,
          },
          firstPage: false,
        })
      );
      return setFormData((prev) => {
        return {
          ...getItems,
          [name]: {
            ...getItems[name],
            value: value.trim(),
            hasError: hasError,
            errorMessage: error,
          },
          firstPage: false,
        };
      });
    } else {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...formData,
          [name]: {
            ...formData[name],
            value: value.trim(),
            errorMessage: error,
          },
          firstPage: false,
        })
      );
      setFormData((prev) => {
        return {
          ...prev,
          [name]: {
            ...prev[name],
            value: value.trim(),
            hasError: hasError,
            errorMessage: error,
          },
          firstPage: false,
        };
      });
    }
  };

  const handleSelectChange = (val, action) => {
    if (!getItems) {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...formData,
          [action.name]: val,
        })
      );
      setFormData((prev) => {
        return { ...prev, [action.name]: val };
      });
    }

    if (getItems) {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...getItems,
          [action.name]: { ...val, hasError: false },
        })
      );
      setFormData((prev) => {
        return { ...getItems, [action.name]: { ...val, hasError: false } };
      });
    }

    if (getItems && getItems.position_id) {
      const getStore = JSON.parse(localStorage.getItem("items"));
      if (getStore.position_id.team_id !== getStore.team_id.id) {
        localStorage.setItem(
          "items",
          JSON.stringify({ ...getStore, position_id: "" })
        );
        setFormData((prev) => {
          return { ...prev, getStore };
        });
      }
    }
  };

  const handleSelectApi = async (e) => {
    teamApi(sendRequest, setEmpSelect);
  };
  const handlePositionApi = async (e) => {
    if (formData.team_id) {
      positionApi(sendRequest, setEmpSelect, formData.team_id.id);
    }
  };

  const checkEmpForm = (e) => {
    e.preventDefault();

    if (
      !formData.name.hasError &&
      !formData.surname.hasError &&
      !formData.phone_number.hasError &&
      !formData.email.hasError &&
      formData.team_id &&
      formData.position_id.team_id === formData.team_id.id
    ) {
      setFormData((prev) => {
        localStorage.setItem(
          "items",
          JSON.stringify({
            ...prev,
            firstFormValid: true,
            checkFirstForm: true,
            firstPage: false,
          })
        );
        return {
          ...prev,
          firstFormValid: true,
          checkFirstForm: true,
          firstPage: false,
        };
      });

      if (formData.position_id.team_id === formData.team_id.id) {
        setPage(page + 1);
      } else {
        setPage(1);
      }
    } else if (formData.position_id.team_id !== formData.team_id.id) {
      setFormData((prev) => {
        localStorage.setItem(
          "items",
          JSON.stringify({
            ...prev,
            position_id: "",
            firstFormValid: false,
            checkFirstForm: false,
            firstPage: true,
          })
        );
        return {
          ...prev,
          position_id: "",
          firstFormValid: false,
          checkFirstForm: false,
          firstPage: true,
        };
      });
      setPage(1);
    } else {
      setFormData((prev) => {
        localStorage.setItem(
          "items",
          JSON.stringify({
            ...prev,
            firstFormValid: false,
            checkFirstForm: false,
            firstPage: true,
          })
        );
        return {
          ...prev,
          firstFormValid: false,
          checkFirstForm: false,
          firstPage: true,
        };
      });
    }
  };

  return (
    <div className="emp_container">
      <div className="emp_info">
        <div className="emp_wrapper">
          <div className="normal_inputs">
            <Input
              name="name"
              value={formData.name.value}
              onChange={empHandleChange}
              label="სახელი"
              placeholder="გრიშა"
              text={`${
                formData.firstPage &&
                formData.name.hasError &&
                formData.name.errorMessage
                  ? formData.name.errorMessage
                  : "მინიმუმ 2 სიმბოლო, ქართული ასოები"
              }`}
              class={`input_containe ${
                formData.firstPage &&
                formData.name.hasError &&
                "firstname_lastName_error"
              }`}
              type="text"
            />
          </div>

          <div className="normal_inputs">
            <Input
              name="surname"
              value={formData.surname.value}
              onChange={empHandleChange}
              label="გვარი"
              placeholder="ბაგრატიონი"
              text={`${
                formData.firstPage &&
                formData.surname.hasError &&
                formData.surname.errorMessage
                  ? formData.surname.errorMessage
                  : "მინიმუმ 2 სიმბოლო, ქართული ასოები"
              }`}
              class={`input_containe ${
                formData.firstPage &&
                formData.surname.hasError &&
                "firstname_lastName_error"
              }`}
              type="text"
            />
          </div>
        </div>

        <div className="custom_select__contrainer">
          <CustomSelect
            name="team_id"
            value={formData.team_id || null}
            placeholder="თიმი"
            options={empSelect.teams}
            styles={employeeSelect}
            classes={`emp_select_one ${
              formData.team_id === "" &&
              formData.firstPage &&
              "emp_select_error"
            }`}
            onChange={handleSelectChange}
            onFocus={handleSelectApi}
          />
          <CustomSelect
            value={
              formData.position_id &&
              formData.position_id.team_id === formData.team_id.id
                ? formData.position_id
                : null
            }
            name="position_id"
            options={empSelect.positions}
            placeholder="პოზიცია"
            styles={employeeSelect}
            classes={`emp_select_one ${
              formData.position_id === "" &&
              formData.firstPage &&
              "emp_select_error"
            }`}
            onChange={handleSelectChange}
            onFocus={handlePositionApi}
          />
        </div>

        <div className="large_inputs__wrapper">
          <div className="large_inputs">
            <Input
              name="email"
              label="მეილი"
              type="email"
              placeholder="grish666@redberry.ge"
              text="უნდა მთავრდებოდეს @redberry.ge-ით"
              class={`large_input_container ${
                formData.firstPage && formData.email.hasError && "email_error"
              }`}
              onChange={empHandleChange}
              value={formData.email.value}
            />
          </div>

          <div className="large_inputs">
            <Input
              name="phone_number"
              label="ტელეფონის ნომერი"
              type="text"
              placeholder="+995 598 00 07 01"
              text="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              class={`large_input_container ${
                formData.phone_number.hasError &&
                formData.firstPage &&
                "email_error"
              }`}
              desktopClass="desktop_control"
              mobileClass="mobile_control"
              mobile
              mobileText="ქართული მობ-ნომრის ფორმატი"
              onKeyDown={FormatInput}
              onChange={empHandleChange}
              value={formData.phone_number.value}
            />
          </div>
        </div>
        <div className="next_btn_container">
          <Button type="button" classes="next_btn" onClick={checkEmpForm}>
            შემდეგი
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
