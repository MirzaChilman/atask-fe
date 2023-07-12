import Card from "@/components/Card";
import { fetchUsers } from "@/hooks/useUsers/fetch";
import { User } from "@/hooks/useUsers/types";
import { QueryClient, dehydrate } from "@tanstack/react-query";

interface Props {
  dehydratedState: User[];
}

export default function Home({ dehydratedState }: Props) {
  return (
    <main className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {dehydratedState?.map((datum, index) => {
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
    </main>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["useProfile"], fetchUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient).queries[0].state.data,
    },
  };
}
