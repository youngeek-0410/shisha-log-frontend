type Diary = {
  id: number;
  title: string;
};

type Flavor = {
  brandName: string;
  id: string;
  amount: number | undefined;
};

type FlavorFormValue = {
  id: string;
  name: string;
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

type DiaryFlavor = {
  id: string;
  flavor_name: string;
  brand_name: string;
  amount: number;
};

type FlavorList = Omit<DiaryFlavor, "amount">;

type Bottle = {
  id: string;
  bottle_name: string;
  brand_name: string;
};

type Bowl = {
  id: string;
  bowl_name: string;
  brand_name: string;
};

type HeatManagement = {
  id: string;
  heat_management_name: string;
  brand_name: string;
};

type Charcoal = {
  id: string;
  charcoal_name: string;
  brand_name: string;
};
