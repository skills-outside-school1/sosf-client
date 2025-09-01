import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessNotification = (message) => {
  toast.success(message, {

    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      marginTop: "4.8rem",
      zIndex: 9999,
      color: "green",
    },
  });
};

export const showErrorNotification = (message) => {
  toast.error(message, {
  
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      marginTop: "4.8rem",
      zIndex: 9999,
      color: "red",
    },
  });
};
