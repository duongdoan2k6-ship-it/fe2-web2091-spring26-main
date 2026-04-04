import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface Story {
  title: string;
  author: string;
  image: string;
  description: string;
  category?: number | string;
}

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const listQuery = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (values: Story) => {
      const res = await axios.post("http://localhost:3000/stories", values);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: number | string) => {
      const res = await axios.delete(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (story: Partial<Story> & { id: number | string }) => {
      const { id, ...values } = story;
      const res = await axios.put(`http://localhost:3000/stories/${id}`, values);
      return res.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      queryClient.invalidateQueries({ queryKey: ["story", String(variables.id)] });
    },
  });

  return {
    list: listQuery,
    add: addMutation,
    remove: removeMutation,
    update: updateMutation,
  };
};
