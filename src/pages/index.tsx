import { currentValueAtom } from "@/atoms/search";
import Form from "@/components/Form";
import useUsers from "@/hooks/useUsers";
import { User } from "@/hooks/useUsers/types";
import { useAtomValue } from "jotai";

interface Props {
  dehydratedState: User[];
}

export default function Home() {
  const { data } = useUsers();
  const keywords = useAtomValue(currentValueAtom);
  return (
    <main className="container mx-auto px-4 mb-8">
      {keywords}
      <Form />
      {JSON.stringify(data)}
    </main>
  );
}
