import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import useUsers from "..";

// jest.mock("axios", () => {
//   return {
//     get: jest.fn().mockReturnValueOnce({
//       data: [
//         {
//           id: 1,
//           name: "John Doe",
//           username: "johndoe",
//           email: "johndoe@example.com",
//         },
//       ],
//     }),
//     create: jest.fn().mockImplementation(() => axios),
//   };
// });

jest.mock("axios", () => {
  return {
    create: jest.fn().mockImplementation(() => axios),
    get: jest.fn(),
  };
});

describe("useUsers", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns the users data, loading state, and error state", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
      },
    ];

    (axios.get as jest.Mock).mockResolvedValue({
      isError: false,
      isLoading: false,
      data: mockUsers,
    });

    const { result } = renderHook(() => useUsers(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBeUndefined();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(false);
      expect(result.current.data).toEqual(mockUsers);
    });
  });

  it("handles error state correctly", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      isError: true,
      isLoading: false,
      data: undefined,
    });

    const { result } = renderHook(() => useUsers(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBeUndefined();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(true);
      expect(result.current.data).toBeUndefined();
    });
  });
});
