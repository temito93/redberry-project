export const checkIsValid = (name, value) => {
  let hasError = false;
  let error = "";

  switch (name) {
    case "name": {
      if (value.trim() === "" || value.trim().length < 2) {
        hasError = true;
        error = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
      } else if (!/^[ა-ჰ]+$/.test(value)) {
        hasError = true;
        error = "გამოიყენე ქართული ასოები";
      } else {
        hasError = false;
      }

      break;
    }
    case "surname": {
      if (value.trim() === "" || value.trim().length < 2) {
        hasError = true;
        error = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
      } else if (!/^[ა-ჰ]+$/.test(value)) {
        hasError = true;
        error = "გამოიყენე ქართული ასოები";
      } else {
        hasError = false;
      }
      break;
    }

    case "email": {
      if (value.trim() === "") {
        hasError = true;
        error = "Please enter email";
      } else if (!/^[\w.+-]+@redberry\.ge$/.test(value)) {
        hasError = true;
        error = "Invalid email";
      } else {
        hasError = false;
        error = "";
      }

      break;
    }
    case "phone_number": {
      if (
        value.trim().slice(0, 4).toString() === "+995" &&
        value.trim().length === 13
      ) {
        hasError = false;
        error = "არასწორი ნომერი";
      } else {
        hasError = true;
      }

      break;
    }

    case "laptop_name": {
      let reg = new RegExp(/^[ A-Za-z0-9_@./!@#$%^&*()_+=]*$/);

      if (value.trim() === "") {
        hasError = true;
        error = "error";
      } else if (!/^[ A-Za-z0-9_@./!@#$%^&*()_+=]*$/.test(value)) {
        error = "error";
        hasError = true;
      } else {
        hasError = false;
      }
      break;
    }
    case "laptop_hard_drive_type": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_ram": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_cpu_threads": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_cpu_cores": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_brand_id": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "position_id": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "team_id": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_state": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_price": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    case "laptop_cpu": {
      if (!value) {
        hasError = true;
        error = "error";
      } else {
        hasError = false;
      }
      break;
    }

    default:
      break;
  }
  return { hasError, error };
};
