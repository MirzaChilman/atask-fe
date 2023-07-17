import githubApi from "@/helpers/axiosClient/githubApi";

export const fetchRepos = async (username: string) => {
  console.log({ username });

  return (await githubApi.get(`/users/${username}/repos`)).data;
};
