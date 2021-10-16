import appAxios from "../helpers/app-axios";

export default () => {
  return appAxios({
    method: "GET",
    url: "/pattern-categories/all",
  });
};
