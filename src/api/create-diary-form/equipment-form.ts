import { client } from "@/utils/client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type GetEquimentsByUserIdResponse = {
  user_flavor_list: FlavorList[];
  user_bottle_list: Bottle[];
  user_bowl_list: Bowl[];
  user_heat_management_list: HeatManagement[];
  user_charcoal_list: Charcoal[];
};

export const useGetEquimentsByUserId = (userId: string, enabled: boolean) => {
  return useQuery<GetEquimentsByUserIdResponse, AxiosError>({
    queryKey: ["user-equipments"],
    queryFn: () => client.get<GetEquimentsByUserIdResponse>(`/user/${userId}/equipment`).then((res) => res.data),
    enabled: enabled,
  });
};

export type CreateDiaryInput = {
  user_id: string;
  equipments: {
    bowl_id: string;
    bottle_id: string;
    heat_management_id: string;
    charcoal_id: string;
    climate: {
      temperature: number;
      humidity: number;
    };
  };
  diary_flavor_list: {
    id: string;
    amount: number;
  }[];
  image: string | undefined;
  sucking_text: string | undefined;
  review: {
    creator_evaluation: number;
    taste_evaluation: number;
    creator_good_points: string | undefined;
    creator_bad_points: string | undefined;
    taste_comments: string | undefined;
  };
  create_date: string;
};

export const useCreateDiaryByUserId = () => {
  return useMutation({
    mutationFn: (input: CreateDiaryInput) => client.post(`/diary`, input).then((res) => res.data),
  });
};
