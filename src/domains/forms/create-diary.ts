import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// flavor listは別で定義
const schema = yup.object().shape({
  bottle: yup.string().required("Bottleの選択は必須です"),
  bowl: yup.string().required("Bowlの選択は必須です"),
  heat_management: yup.string().required("Heat Managementの選択は必須です"),
  charcoal: yup.string().required("Charcoalの選択は必須です"),
  climate_temp: yup.number().required("Climateの温度は必須です").typeError("Climateの温度は数字で入力してください"),
  climate_humidity: yup.number().required("Climateの湿度は必須です").typeError("Climateの湿度は数字で入力してください"),
  // special
  image: yup.string(),
  serve_text: yup.string().max(255, "Serveは255文字までの入力です"),
  sucking_text: yup.string().max(255, "Sucking Outは255文字までの入力です"),
  // special
  creator_evaluation: yup.number().required("Creatorは必須です"),
  // special
  taste_evaluation: yup.number().required("Tasteは必須です"),
  creator_good_points: yup.string().max(255, "Creator Good Pointsは255文字までの入力です"),
  creator_bad_points: yup.string().max(255, "Creator Bad Pointsは255文字までの入力です"),
  taste_comments: yup.string().max(255, "Taste Commentsは255文字までの入力です"),
});

export type CreateDiaryInput = yup.InferType<typeof schema>;

export const useCreateDiaryForm = () => {
  return useForm<CreateDiaryInput>({ resolver: yupResolver(schema), mode: "onChange" });
};
