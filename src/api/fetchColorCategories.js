import appAxios from "../helpers/app-axios";

export default () => {
  return appAxios({
    method: "GET",
    url: "/color-categories/all",
  });
};
