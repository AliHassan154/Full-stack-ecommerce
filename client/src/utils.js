// utils.js

import { toast } from "react-toastify";

export const successToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
  });
};