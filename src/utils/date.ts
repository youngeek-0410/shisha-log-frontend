// 2023-01-01
export const generateDateString = () => {
  const dateObject = new Date();
  const month = dateObject.getMonth() >= 10 ? dateObject.getMonth() : `0${dateObject.getMonth()}`;
  return `${dateObject.getFullYear()}-${month}-${dateObject.getDate()}`;
};

export const generateDateFromString = (dateString: string) => {
  const dateArray = dateString.split("-");
  const year = Number(dateArray[0]);
  const month = Number(dateArray[1]);
  const date = Number(dateArray[2]);

  return new Date(year, month, date);
};
