import Form from "@/components/Form";
import useUsers from "@/hooks/useUsers";
import { User } from "@/hooks/useUsers/types";
import { useAtomValue } from "jotai";
import { useDebounce } from "@uidotdev/usehooks";
import { searchAtom } from "@/atoms/search";

interface Props {
  dehydratedState: User[];
}

export default function Home() {
  const { data } = useUsers();
  const keywords = useAtomValue(searchAtom);
  const debouncedValue = useDebounce(keywords, 1000);
  return (
    <main className="container mx-auto px-4 mb-8">
      {debouncedValue}
      <Form />
      {JSON.stringify(data)}
    </main>
  );
}
