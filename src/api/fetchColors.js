import appAxios from "../helpers/app-axios";

export const fetchPatternColors = async ({ categories, page }) => {
  return appAxios({
    method: "GET",
    url: "/colors/main",
    params: {
      categories,
      page,
    },
  });
};
export const fetchBackgroundColors = async ({ categories, page }) => {
  return appAxios({
    method: "GET",
    url: "/colors/background",
    params: {
      categories,
      page,
    },
  });
};
