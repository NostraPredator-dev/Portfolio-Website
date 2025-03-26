import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Mock API functions for frontend-only development
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Mock API Request: ${method} ${url}`, data);
  // Create a mock Response that always succeeds
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Mock query function for frontend-only development
export const getQueryFn: <TData>(options: {
  on401: "returnNull" | "throw";
}) => QueryFunction<TData> =
  () =>
  async ({ queryKey }) => {
    console.log(`Mock Query: ${queryKey[0]}`);
    // Return empty data for frontend development
    return {} as TData;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
