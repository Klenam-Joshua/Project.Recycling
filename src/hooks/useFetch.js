import { useState } from "react";
import { useCustomAxios } from "./useCustomAxios";
import { useQuery } from "@tanstack/react-query";

export default function useFetch(
  url,
  queryKey = [],
  _enabled = true,
  onSuccess = () => {}
) {
  const [enabled, setEnabled] = useState(_enabled);
  const customAxios = useCustomAxios();
  const fetchData = async () => {
    const response = await customAxios.get(url);
    // console.log({ fire: response.data });
    return response.data;
  };

  const result = useQuery({
    onSuccess,
    enabled,
    queryKey,
    queryFn: fetchData,
  });

  return { ...result, setEnabled };
}
