"use client";

import { Container } from "@mui/material";
import { Index } from "./_components/Index";
import { useGetDiariesByUserId } from "@/api/diary-index";

export default function Home() {
  const userId = process.env.NEXT_PUBLIC_USER_ID;
  const { data, isLoading } = useGetDiariesByUserId(userId as string, !!userId);
  return (
    !isLoading &&
    data && (
      <Container>
        <Index data={data} />
      </Container>
    )
  );
}
