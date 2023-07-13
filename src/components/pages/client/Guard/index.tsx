import Loading from "@/components/Card/Loading";
import useSearchUser from "@/hooks/useSearchUser";
import React from "react";

const Guard = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isLoading } = useSearchUser();
  if (isLoading) return <Loading />;
  if (isError) return "isError";
  if (data?.items?.length === 0) return;

  return <>{children}</>;
};

export default Guard;
