import Form from "@/components/Form";
import useSearchUser from "@/hooks/useSearchUser";
import Accordions from "@/components/Accordion";
import Guard from "@/components/pages/client/Guard";

export default function Home() {
  const { data, isLoading, isInitialLoading } = useSearchUser();

  return (
    <main className="container mx-auto px-4 mb-8">
      <Form />
      <Guard>
        <Accordions items={data?.items || []} />
      </Guard>
    </main>
  );
}
