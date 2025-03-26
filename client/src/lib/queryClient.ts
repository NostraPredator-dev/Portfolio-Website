import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Email service URL
const EMAIL_SERVICE_URL = 'http://localhost:3001';

// Real API request function
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For contact form, use the email service
  if (url === '/api/contact') {
    console.log(`API Request to email service: ${method} ${url}`, data);
    return fetch(`${EMAIL_SERVICE_URL}/api/contact`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  // For other requests, use mock response (for now)
  console.log(`API Request: ${method} ${url}`, data);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Query function for data fetching
export const getQueryFn = <T>(options: {
  on401: "returnNull" | "throw";
}): QueryFunction<T> => {
  return async ({ queryKey }) => {
    console.log(`Query: ${queryKey[0]}`);
    // Return empty data for now
    return {} as T;
  };
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
