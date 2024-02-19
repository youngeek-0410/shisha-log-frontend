"use client";

import React from "react";
import { NextPage } from "next";
import Form from "./_components/Form";
import { useGetEquimentsByUserId } from "@/api/create-diary-form/equipment-form";

const NewDiary: NextPage = () => {
  const userId = process.env.NEXT_PUBLIC_USER_ID;
  const { data, isLoading, error } = useGetEquimentsByUserId(userId as string, !!userId);

  return !isLoading && data && userId && <Form data={data} userId={userId}></Form>;
};

export default NewDiary;
