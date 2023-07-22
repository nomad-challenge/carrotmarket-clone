import { useState } from "react";

interface IUseMutationState {
  data: any;
  isLoading: boolean;
  errors: any;
}
type UseMutationResult = [(data: any) => void, IUseMutationState];
export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState({
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
      .then((res) => res.json())
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((errors) => setState((prev) => ({ ...prev, errors })))
      .finally(() => setState((prev) => ({ ...prev, isLoading: false })));
  }
  return [mutation, state];
}
