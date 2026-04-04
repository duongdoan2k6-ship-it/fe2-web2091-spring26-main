import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = (id?: number | string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: Record<string, any>) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, values);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      if (id) {
        queryClient.invalidateQueries({ queryKey: ["story", String(id)] });
      }
    },
  });
};
