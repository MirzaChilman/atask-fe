import Loading from "@/components/Card/Loading";
import Empty from "@/components/Empty";
import useRepos from "@/hooks/useRepos";
import useSearchUser from "@/hooks/useSearchUser";
import React from "react";

const Guard = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isFetching } = useSearchUser();

  console.log({ isFetching });

  if (isFetching) return <Loading />;
  if (!data?.items.length) return <Empty />;
  if (isError) return "isError";

  return <>{children}</>;
};

export default Guard;
