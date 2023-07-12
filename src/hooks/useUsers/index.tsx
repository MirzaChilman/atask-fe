import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetch";
import { User } from "./types";
import { useAtomValue } from "jotai";
import { searchAtom } from "@/atoms/search";
import { useDebounce } from "@uidotdev/usehooks";
const useUsers = () => {
  const keywords = useAtomValue(searchAtom);
  const debouncedKeywords = useDebounce(keywords, 1000);
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["useUsers", debouncedKeywords],
    queryFn: () => fetchUsers(debouncedKeywords),
    enabled: debouncedKeywords.length > 3,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useUsers;
