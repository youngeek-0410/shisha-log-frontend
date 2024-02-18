type Diary = {
  id: number;
  title: string;
};

type Flavor = {
  brandName: string;
  id: string;
  amount: number | undefined;
};

type DiaryFormValues = {
  bottleId: number;
  bowlId: number;
  hmsId: number;
  charcoalId: number;
  temperature: number;
  humidity: number;
  flavor: Flavor[];
  process: string;
  eval: string;
};

type FlavorList = {
  id: string;
  flavor_name: string;
  brand_name: string;
};
