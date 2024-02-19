// test data
export const flavorList = [
  { id: 1, flavor_name: "David", brand_name: "Anan" },
  { id: 2, flavor_name: "John", brand_name: "Anan" },
  { id: 3, flavor_name: "Ken", brand_name: "Ken" },
  { id: 4, flavor_name: "Walker", brand_name: "Syankus" },
  { id: 5, flavor_name: "Jin", brand_name: "Sinken" },
  { id: 6, flavor_name: "Avicii", brand_name: "Janken" },
  { id: 7, flavor_name: "Paul van dyk", brand_name: "Sake" },
  { id: 8, flavor_name: "Armin ban Buuren", brand_name: "Saki" },
  { id: 9, flavor_name: "Kevin", brand_name: "Kami" },
];

type Flavor = {
  flavor_name: string;
  brand_name: string;
  amount: number;
};

export type Diary = {
  id: string;
  diary_flavor_list: DiaryFlavor[];
  create_date: Date;
  creator_evaluation: number;
  taste_evaluation: number;
};

export const diaries = [
  {
    id: 1,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 2,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 2, flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 3,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { id: 3, flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 4,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 5,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 2, flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 6,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { id: 3, flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 7,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 8,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 2, flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 9,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { id: 3, flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 10,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 11,
    diary_flavor_list: [
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { id: 1, flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
];
