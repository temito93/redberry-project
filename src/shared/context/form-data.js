import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export const defaultValues = {
  name: { value: "", hasError: true, errorMessage: "" },
  surname: { value: "", hasError: true, errorMessage: "" },
  team_id: "",
  position_id: "",
  phone_number: { value: "", hasError: true, errorMessage: "" },
  email: { value: "", hasError: true, errorMessage: "" },
  laptop_name: { value: "", hasError: true, errorMessage: "" },
  laptop_brand_id: "",
  laptop_cpu: "",
  laptop_cpu_cores: { value: "", hasError: true, errorMessage: "" },
  laptop_cpu_threads: { value: "", hasError: true, errorMessage: "" },
  laptop_ram: { value: "", hasError: true, errorMessage: "" },
  laptop_hard_drive_type: { value: "", hasError: true, errorMessage: "" },
  laptop_state: { value: "", hasError: true, errorMessage: "" },
  laptop_purchase_date: { value: "", hasError: false, errorMessage: "" },
  laptop_price: { value: "", hasError: true, errorMessage: "" },
  isFormValid: false,
  firstFormValid: false,
  secondFormValid: false,
  checkFirstForm: true,
  checkSecondForm: true,
  firstPage: false,
  secondPage: false,
};

export const FormDataProvider = (props) => {
  const [formData, setFormData] = useState(defaultValues);
  const [lapSelect, setLapSelect] = useState({ brands: [], cpus: [] });
  const [list, setList] = useState([]);
  const [personInfo, setPersonInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [empSelect, setEmpSelect] = useState({
    teams: [],
    positions: [],
  });
  const [isSubmited, setIsSubmited] = useState(false);

  const [file, setFile] = useState();

  return (
    <FormDataContext.Provider
      value={{
        formData,
        setFormData,
        lapSelect,
        setLapSelect,
        empSelect,
        setEmpSelect,
        isSubmited,
        setIsSubmited,
        file,
        setFile,
        list,
        setList,
        personInfo,
        setPersonInfo,
        page,
        setPage,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};
