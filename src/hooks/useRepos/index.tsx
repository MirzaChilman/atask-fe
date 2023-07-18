import { useQuery } from "@tanstack/react-query";
import { fetchRepos } from "./fetch";
import { Repository } from "./types";
import { useAtom, useAtomValue } from "jotai";
import { repoKeywordAtom, repoUserAtom } from "@/atoms/Repo";
import useSearchUser from "../useSearchUser";
import { searchedKeywordsAtom } from "@/atoms/Search";

const useRepos = () => {
  const { data: searchData } = useSearchUser();
  const keywords = useAtomValue(repoKeywordAtom);
  const searchedKeywords = useAtomValue(searchedKeywordsAtom);
  const [repoUser, setRepoUser] = useAtom(repoUserAtom);

  const { isError, data, isFetching } = useQuery<Repository[]>({
    queryKey: ["useRepos", searchedKeywords],
    queryFn: () => fetchRepos(searchedKeywords),
    enabled: !!searchData,
    onSuccess: (data: Repository[]) => {
      const repoUserMap = new Map<string, Repository[]>(repoUser);

      if (!repoUserMap.has(keywords)) {
        repoUserMap.set(keywords, data);
        setRepoUser(repoUserMap);
      }
    },
  });

  return {
    data,
    isError,
    isFetching,
  };
};

export default useRepos;
