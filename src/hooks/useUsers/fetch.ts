import githubApi from "@/helpers/axiosClient/githubApi";

export const fetchUsers = async (keywords: string) => {
  return (await githubApi.get(`/search/users?q=${keywords}`)).data;
};
