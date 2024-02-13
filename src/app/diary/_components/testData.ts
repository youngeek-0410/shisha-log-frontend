// test data
export const flavors = [
  { id: 1, name: "David" },
  { id: 2, name: "John" },
  { id: 3, name: "Ken" },
  { id: 4, name: "Walker" },
  { id: 5, name: "Jin" },
  { id: 6, name: "Avicii" },
  { id: 7, name: "Paul van dyk" },
  { id: 8, name: "Armin ban Buuren" },
  { id: 9, name: "Kevin" },
];

type Flavor = {
  flavor_name: string;
  brand_name: string;
  amount: number;
};

export type Diary = {
  id: number;
  diary_flavor_list: Flavor[];
  create_date: Date;
  creator_evaluation: number;
  taste_evaluation: number;
};

export const diaries = [
  {
    id: 1,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 2,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 3,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 4,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 5,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 6,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 7,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 8,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "John", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.2 },
    ],
    create_date: new Date(2023, 11, 30),
    creator_evaluation: 3,
    taste_evaluation: 2,
  },
  {
    id: 9,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.5 },
      { flavor_name: "Kevin", brand_name: "Afzal", amount: 10 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 9),
    creator_evaluation: 5,
    taste_evaluation: 10,
  },
  {
    id: 10,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
  {
    id: 11,
    diary_flavor_list: [
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
      { flavor_name: "David", brand_name: "Afzal", amount: 3.6 },
    ],
    create_date: new Date(2023, 11, 5),
    creator_evaluation: 1,
    taste_evaluation: 9,
  },
];
