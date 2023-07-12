import Loading from "@/components/Card/Loading";
import useUsers from "@/hooks/useUsers";
import React from "react";

const Guard = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isLoading } = useUsers();
  if (isLoading) return <Loading />;
  if (isError) return "isError";
  if (data?.length === 0) return;

  return <>{children}</>;
};

export default Guard;
