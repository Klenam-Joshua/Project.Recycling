import { useCustomAxios } from "./useCustomAxios";
import { useMutation } from "@tanstack/react-query";
export const usePost = (onSuccess = () => {}, onError = () => {}) => {
  const customAxios = useCustomAxios();

  const postData = async (options = { data: {}, url: "" }) => {
    const response = await customAxios.post(options.url, options.data);
    return response;
  };

  const result = useMutation({
    mutationFn: postData,
    onSuccess: ({ data }) => {
      console.log({ data });
      onSuccess(data);
    },
    onError: (error) => {
      onError(error);
    },
  });
  return result;
};
