import { Diary } from "@/app/diary/_components/testData";
import { useEffect, useState } from "react";

type Props = {
  diaries: Diary[];
};

export const useDiariesPagination = ({ diaries }: Props) => {
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [diaries]);

  useEffect(() => {
    diaries.slice(page * 10).length > (page + 1) * 10 ? setHasNext(true) : setHasNext(false);
    page != 0 ? setHasPrev(true) : setHasPrev(false);
  }, [diaries, page]);

  return {
    hasNext,
    hasPrev,
    page,
    setPage,
  };
};
