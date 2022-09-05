export const employeeSelect = {
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    backgroundColor: "unset",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#e7f0f8",
    },
    color: "#000000",
  }),

  valueContainer: (provided, state) => ({
    width: 878,
    padding: 0,
    display: "flex",
    alignItems: "center",
    marginLeft: 24,
  }),

  control: (provided, state) => ({
    display: "flex",
    height: 60,
    background: "#ebebeb",
    borderColor: "#ebebeb",
    boxShadow: "#ebebeb",
    borderRadius: 8,
  }),

  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: "#000000",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#484848", // Custom colour
  }),
};

export const laptopBrand = {
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    backgroundColor: "unset",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#e7f0f8",
    },
    color: "#000000",
  }),

  valueContainer: (provided, state) => ({
    width: 408,
    padding: 0,
    display: "flex",
    alignItems: "center",
    marginLeft: 24,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: "0.04em",
  }),

  control: (provided, state) => ({
    display: "flex",
    height: 60,
    background: "#ebebeb",
    borderColor: "#ebebeb",
    boxShadow: "#ebebeb",
    borderRadius: 8,
  }),

  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: "#000000",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#484848", // Custom colour
  }),
};

export const cpuStyles = {
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    backgroundColor: "unset",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#e7f0f8",
    },
    color: "#000000",
  }),

  valueContainer: (provided, state) => ({
    width: 227,
    padding: 0,
    display: "flex",
    alignItems: "center",
    marginLeft: 24,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: "0.04em",
  }),

  control: (provided, state) => ({
    display: "flex",
    height: 60,
    background: "#ebebeb",
    borderColor: "#ebebeb",
    boxShadow: "#ebebeb",
    borderRadius: 8,
  }),

  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: "#000000",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#484848", // Custom colour
  }),
};
