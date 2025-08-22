import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { createQueryClient } from '../lib/ssr-query-client';
import { fetchData } from './fetchers';
import ClientComponent from './client-component';

export default async function Page() {
  const queryClient = createQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <h1>SSR + TanStack Query</h1>
      <HydrationBoundary state={dehydratedState}>
        <ClientComponent />
      </HydrationBoundary>
    </main>
  );
}