import axios from "axios";

export const fetchUserData = () => {
  const userPromise = userdata();
  return {
    user: wrapPromise(userPromise),
  };
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export const userdata = () => {
  const BASE_URL = "https://randomuser.me/api/?results=200";
  return axios.get(BASE_URL).then((res) => res.data.results);
};
