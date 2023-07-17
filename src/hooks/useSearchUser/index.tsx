import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetch";
import { SearchResponse, User } from "./types";
import { useAtomValue } from "jotai";
import { searchAtom } from "@/atoms/Search";

const useSearchUser = () => {
  const keywords = useAtomValue(searchAtom);

  const { data, isLoading, isError, refetch } = useQuery<SearchResponse>({
    queryKey: ["useSearchUser", keywords],
    queryFn: () => fetchUsers(keywords),
    enabled: false,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useSearchUser;
