import appAxios from "../helpers/app-axios";

export const fetchPatternColors = async ({ categories }) => {
  return appAxios({
    method: "GET",
    url: "/colors/main",
    params: {
      categories,
    },
  });
};
export const fetchBackgroundColors = async ({ categories }) => {
  return appAxios({
    method: "GET",
    url: "/colors/background",
    params: {
      categories,
    },
  });
};
