import Loading from "@/components/Card/Loading";
import Empty from "@/components/Empty";
import useRepos from "@/hooks/useRepos";
import React from "react";

const Guard = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isFetching } = useRepos();

  if (isFetching) return <Loading />;
  if (!data?.length) return <Empty />;
  if (isError) return "isError";

  return <>{children}</>;
};

export default Guard;
