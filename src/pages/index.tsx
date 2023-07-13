import Form from "@/components/Form";
import useSearchUser from "@/hooks/useSearchUser";
import Accordions from "@/components/Accordion";

export default function Home() {
  const { data } = useSearchUser();
  return (
    <main className="container mx-auto px-4 mb-8">
      <Form />
      <Accordions items={data?.items || []} />
    </main>
  );
}
