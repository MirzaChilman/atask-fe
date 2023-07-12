import Card from "@/components/Card";
import Guard from "@/components/pages/client/Guard";
import useUsers from "@/hooks/useUsers";

export default function Home() {
  const { data } = useUsers();
  return (
    <main className="container mx-auto px-4 mb-8">
      <Guard>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data?.map((datum, index) => {
            return (
              <Card
                key={datum.id}
                index={index}
                name={datum.name}
                phone={datum.phone}
                email={datum.email}
                site={datum.website}
                image={`https://avatars.dicebear.com/v2/avataaars/${datum.name}.svg`}
              />
            );
          })}
        </div>
      </Guard>
    </main>
  );
}
