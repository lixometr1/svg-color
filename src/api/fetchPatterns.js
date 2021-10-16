import appAxios from "../helpers/app-axios";
export default async ({ page, categories }) => {
  return appAxios({
    method: "GET",
    url: "/patterns/by-category",
    params: {
      page,
      categories
    },
  });
};
