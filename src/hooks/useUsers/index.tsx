import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetch";
import { User } from "./types";

const useUsers = () => {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["useProfile"],
    queryFn: fetchUsers,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useUsers;
