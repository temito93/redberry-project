import { useContext, useEffect, useState } from "react";

import Button from "../../shared/components/FormElements/Button";
import CustomSelect from "../../shared/components/FormElements/CustomSelect";
import Input from "../../shared/components/FormElements/Input";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { laptopBrand, cpuStyles } from "../../styles/selectStyles";
import { brandApi } from "../../api/brands/brands";
import { cpuApi } from "../../api/cpu/cpu";
import { FormDataContext } from "../../shared/context/form-data";
import DragDropFile from "../../shared/components/FormElements/DragDropFile";
import { checkIsValid } from "../../shared/util/checkIsValid";
import { FormatInput } from "../../helper/input/checkNotNumber";
import DatePicker from "react-datepicker";
import { convertDate } from "../../helper/date format/dateFormat";
import typeError from "../../assets/images/type.svg";
import "./laptopDescription.scss";
import "react-datepicker/dist/react-datepicker.css";

const LaptopDescription = ({ prevClick }) => {
  const { formData, setFormData, lapSelect, setLapSelect, setPage, file } =
    useContext(FormDataContext);
  const { sendRequest } = useHttpClient();
  const [date, setDate] = useState("");

  const getLapItems = JSON.parse(localStorage.getItem("items"));

  const handlePage = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const lapHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const { hasError, error } = checkIsValid(name, value);

    localStorage.setItem(
      "items",
      JSON.stringify({
        ...getLapItems,
        [name]: {
          ...getLapItems[name],
          value:
            name === "laptop_cpu_cores"
              ? Number(value)
              : name === "laptop_cpu_threads"
              ? Number(value)
              : name === "laptop_ram"
              ? Number(value)
              : name === "laptop_price"
              ? Number(value)
              : name === "laptop_name"
              ? value.trimLeft()
              : value,

          hasError: hasError,
          errorMessage: error,
        },
      })
    );

    setFormData((prev) => {
      return {
        ...getLapItems,
        [name]: {
          ...getLapItems[name],
          value:
            name === "laptop_cpu_cores"
              ? Number(value)
              : name === "laptop_cpu_threads"
              ? Number(value)
              : name === "laptop_ram"
              ? Number(value)
              : name === "laptop_price"
              ? Number(value)
              : name === "laptop_name"
              ? value.trimLeft()
              : value,
          hasError: hasError,
          errorMessage: error,
        },
      };
    });
  };

  const lapSelectedValHandler = (val, action) => {
    if (getLapItems) {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...getLapItems,
          [action.name]: val,
        })
      );
      setFormData(() => {
        return { ...getLapItems, [action.name]: val };
      });
    } else {
      localStorage.setItem(
        "items",
        JSON.stringify({ ...formData, [action.name]: val })
      );
      setFormData((prev) => {
        return { ...prev, [action.name]: val };
      });
    }
  };

  const dateChangeHandler = (e) => {
    setDate(e);

    setFormData((prev) => {
      localStorage.setItem(
        "items",
        JSON.stringify({
          ...getLapItems,
          laptop_purchase_date: {
            ...getLapItems.laptop_purchase_date,
            value: convertDate(e).split("-").reverse().join("-"),
            hasError: false,
          },
        })
      );
      return {
        ...getLapItems,
        laptop_purchase_date: {
          ...getLapItems.laptop_purchase_date,
          hasError: false,
          value: convertDate(e).split("-").reverse().join("-"),
        },
      };
    });
  };

  const handleBrandApi = async () => {
    brandApi(sendRequest, setLapSelect);
  };

  const handleCpuApi = async () => {
    cpuApi(sendRequest, setLapSelect);
  };

  return (
    <div className="laptop_desc__container">
      <div className="laptop__wrapper">
        <div className="upload_mobile__container">
          <DragDropFile class={formData.secondPage && !file && "photo_error"} />

          <div className="laptop_name__container">
            <div className="laptop_name__input">
              <Input
                name="laptop_name"
                onChange={lapHandleChange}
                value={formData.laptop_name.value}
                text="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
                label="ლეპტოპის სახელი"
                placeholder="HP"
                class={`laptop_input_controller ${
                  formData.secondPage &&
                  formData.laptop_name.hasError &&
                  "laptop_name_error"
                }`}
                type="text"
              />
              <CustomSelect
                value={formData.laptop_brand_id || null}
                name="laptop_brand_id"
                options={lapSelect.brands}
                onChange={lapSelectedValHandler}
                styles={laptopBrand}
                placeholder="ლეპტოპის ბრენდი"
                onFocus={handleBrandApi}
                className={
                  formData.laptop_brand_id === "" &&
                  formData.secondPage &&
                  "laptop_brand_id_error"
                }
              />
            </div>
          </div>
        </div>

        <div className="mobile_cpu__container">
          <div className="cpu_container">
            <CustomSelect
              value={formData.laptop_cpu || null}
              name="laptop_cpu"
              options={lapSelect.cpus}
              onChange={lapSelectedValHandler}
              styles={cpuStyles}
              placeholder="CPU"
              onFocus={handleCpuApi}
              className={
                formData.laptop_cpu === "" &&
                formData.secondPage &&
                "laptop_cpu_error"
              }
            />
            <Input
              name="laptop_cpu_cores"
              onChange={lapHandleChange}
              value={formData.laptop_cpu_cores.value || ""}
              class={`cpu_core__container ${
                formData.secondPage &&
                formData.laptop_cpu_cores.hasError &&
                "cpu_error"
              }`}
              placeholder="14"
              label="CPU-ს ბირთვი"
              text="მხოლოდ ციფრები"
              type="number"
              onKeyDown={FormatInput}
            />
            <Input
              name="laptop_cpu_threads"
              onChange={lapHandleChange}
              value={formData.laptop_cpu_threads.value || ""}
              class={`cpu_core__container ${
                formData.secondPage &&
                formData.laptop_cpu_threads.hasError &&
                "cpu_error"
              }`}
              placeholder="365"
              label="CPU-ს ნაკადი"
              text="მხოლოდ ციფრები"
              type="number"
              onKeyDown={FormatInput}
            />
          </div>

          <div className="ram__container">
            <Input
              name="laptop_ram"
              onChange={lapHandleChange}
              value={formData.laptop_ram.value || ""}
              type="number"
              label="ლეპტოპის RAM (GB)"
              text="მხოლოდ ციფრები"
              placeholder="16"
              class={`laptop_ram__container ${
                formData.secondPage &&
                formData.laptop_ram.hasError &&
                "ram_error"
              }`}
              onKeyDown={FormatInput}
            />

            <div className="radio_btn_container">
              <div
                className={`radio_btn_title ${
                  !formData.laptop_hard_drive_type.value &&
                  formData.secondPage &&
                  "type_error_col"
                }`}
              >
                მეხსიერების ტიპი
                {!formData.laptop_hard_drive_type.value &&
                  formData.secondPage && (
                    <img
                      className="type_error_img"
                      src={typeError}
                      alt="err-img"
                    />
                  )}
              </div>
              <div className="radio_btn_wrapper">
                <Input
                  name="laptop_hard_drive_type"
                  onChange={lapHandleChange}
                  element="radio"
                  title="მეხსიერების ტიპი"
                  label="SSD"
                  value="SSD"
                  checked={formData.laptop_hard_drive_type.value === "SSD"}
                />
                <Input
                  name="laptop_hard_drive_type"
                  onChange={lapHandleChange}
                  element="radio"
                  title="მეხსიერების ტიპი"
                  label="HDD"
                  value="HDD"
                  checked={formData.laptop_hard_drive_type.value === "HDD"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mobile_purchase__container">
          <div className="purchased_date__container">
            <div className={`laptop_purchase_date `}>
              <p>შეძენის რიცხვი (არჩევითი)</p>
              <DatePicker
                format="dd-MM-yyyy"
                dateFormat="dd / MM / yyyy"
                selected={date}
                name="laptop_purchase_date"
                value={formData.laptop_purchase_date.value}
                placeholderText="დდ / მმ / წწწწ"
                onChange={dateChangeHandler}
              />
            </div>

            <Input
              name="laptop_price"
              onChange={lapHandleChange}
              value={formData.laptop_price.value || ""}
              label="ლეპტოპის ფასი"
              placeholder="0000"
              class={`purchased_date__input icon_input ${
                formData.secondPage &&
                formData.laptop_price.hasError &&
                "price_error"
              }`}
              type="number"
              text="მხოლოდ ციფრები"
              gel
              onKeyDown={FormatInput}
            />
          </div>

          <div className="laptop_condition__container">
            <div
              className={`condition_title ${
                !formData.laptop_state.value &&
                formData.secondPage &&
                "condition_error_col"
              }`}
            >
              ლეპტოპის მდგომარეობა
              {!formData.laptop_state.value && formData.secondPage && (
                <img
                  className="condition_error_img"
                  src={typeError}
                  alt="err-img"
                />
              )}
            </div>
            <div className="condition_wrapper">
              <Input
                name="laptop_state"
                onChange={lapHandleChange}
                checked={formData.laptop_state.value === "new"}
                element="radio"
                label="ახალი"
                value="new"
                class="condition__input"
              />
              <Input
                name="laptop_state"
                onChange={lapHandleChange}
                checked={formData.laptop_state.value === "used"}
                element="radio"
                label="მეორადი"
                value="used"
                class="condition__input"
              />
            </div>
          </div>
          <div className="laptop_btns__container">
            <Button type="button" classes="back_btn" onClick={handlePage}>
              უკან
            </Button>
            <Button type="submit" classes="save_btn">
              დამახსოვრება
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDescription;
