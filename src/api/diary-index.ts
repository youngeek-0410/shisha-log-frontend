import { client } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type GetDiariesByUserIdResponse = {
  user_diary_list: {
    id: string;
    diary_flavor_list: DiaryFlavor[];
    creator_evaluation: number;
    taste_evaluation: number;
    create_date: string;
  }[];
};

export const useGetDiariesByUserId = (userId: string, enabled: boolean) => {
  return useQuery<GetDiariesByUserIdResponse, AxiosError>({
    queryKey: ["user-diaries"],
    queryFn: () => client.get<GetDiariesByUserIdResponse>(`/diary/${userId}`).then((res) => res.data),
    enabled: enabled,
  });
};
