'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchers';

export default function ClientComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
    staleTime: Infinity, // prevent refetching
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Client Component</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
