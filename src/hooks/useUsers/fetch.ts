import placeholderApi from "@/helpers/axiosClient/placeholderApi";

export const fetchUsers = async () => {
  return (await placeholderApi.get("/users")).data;
};
