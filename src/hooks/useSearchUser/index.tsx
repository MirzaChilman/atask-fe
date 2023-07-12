import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetch";
import { SearchResponse, User } from "./types";
import { useAtomValue } from "jotai";
import { searchAtom } from "@/atoms/Search";
import { useDebounce } from "@uidotdev/usehooks";
const useSearchUser = () => {
  const keywords = useAtomValue(searchAtom);
  const debouncedKeywords = useDebounce(keywords, 1000);
  const { data, isLoading, isError } = useQuery<SearchResponse>({
    queryKey: ["useSearchUser", debouncedKeywords],
    queryFn: () => fetchUsers(debouncedKeywords),
    enabled: debouncedKeywords.length > 3,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useSearchUser;
