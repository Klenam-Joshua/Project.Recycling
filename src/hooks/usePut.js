import { useCustomAxios } from "./useCustomAxios";
import { useMutation } from "@tanstack/react-query";
export const usePut = (onSuccess) => {
  const customAxios = useCustomAxios();

  const postData = async (options = { data: {}, url: "" }) => {
    const response = await customAxios.put(options.url, options.data);
    return response;
  };

  const result = useMutation({
    mutationFn: postData,
    onSuccess,
  });
  return result;
};
