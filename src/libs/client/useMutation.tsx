import { useState } from "react";

interface IUseMutationState<T> {
  isLoading: boolean;
  data?: T;
  errors?: object;
}
type UseMutationResult<T> = [(data: any) => void, IUseMutationState<T>];
export default function useMutation<T = any>(
  url: string,
): UseMutationResult<T> {
  const [state, setState] = useState<IUseMutationState<T>>({
    isLoading: false,
    data: undefined,
    errors: undefined,
  });
  function mutation(data: any) {
    setState((prev) => ({ ...prev, isLoading: true }));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().catch(() => ({})))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((errors) => setState((prev) => ({ ...prev, errors })))
      .finally(() => setState((prev) => ({ ...prev, isLoading: false })));
  }
  return [mutation, state];
}
