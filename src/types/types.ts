type Diary = {
  id: number;
  title: string;
};

type Flavor = {
  brandId: number;
  tasteId: number;
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
