import { useQuery } from "@tanstack/react-query";
import { fetchRepos } from "./fetch";
import { Repository } from "./types";
import { useAtom, useAtomValue } from "jotai";
import { repoKeywordAtom, repoUserAtom } from "@/atoms/Repo";
import useSearchUser from "../useSearchUser";

const useRepos = () => {
  const { data } = useSearchUser();
  const keywords = useAtomValue(repoKeywordAtom);
  const [repoUser, setRepoUser] = useAtom(repoUserAtom);

  const { isLoading } = useQuery<Repository[]>({
    queryKey: ["useRepos", keywords],
    queryFn: () => fetchRepos(keywords),
    enabled: !!data && !!keywords,
    onSuccess: (data: Repository[]) => {
      const repoUserMap = new Map<string, Repository[]>(repoUser);
      const existingData = repoUserMap.get(keywords) || [];
      const combinedData = [...existingData, ...data];

      repoUserMap.set(keywords, combinedData);
      setRepoUser(repoUserMap);
    },
  });

  return {
    isLoading,
  };
};

export default useRepos;
