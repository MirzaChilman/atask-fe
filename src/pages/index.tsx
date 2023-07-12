import Form from "@/components/Form";
import useSearchUser from "@/hooks/useSearchUser";
import { User } from "@/hooks/useSearchUser/types";
import Accordions from "@/components/Accordion";
import useRepos from "@/hooks/useRepos";
import { useAtomValue } from "jotai";
import { repoUserAtom } from "@/atoms/Repo";

interface Props {
  dehydratedState: User[];
}

export default function Home() {
  const { data } = useSearchUser();
  return (
    <main className="container mx-auto px-4 mb-8">
      <Form />
      <Accordions items={data?.items || []} />
    </main>
  );
}
