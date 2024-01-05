import React from "react";
import { NextPage } from "next";
import Form from "./_components/Form";

const getAllItems = async () => {
  const res = await fetch("http://localhost:3001/testData/selecterOptionData.json");
  const data = await res.json();

  return { data };
};

const NewDiary: NextPage = async () => {
  const { data } = await getAllItems();

  return <Form data={data}></Form>;
};

export default NewDiary;
