import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetch";
import { User } from "./types";
import { useAtomValue } from "jotai";
import { currentValueAtom } from "@/atoms/search";

const useUsers = () => {
  const keywords = useAtomValue(currentValueAtom);
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["useUsers", keywords],
    queryFn: () => fetchUsers(keywords),
    enabled: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useUsers;
