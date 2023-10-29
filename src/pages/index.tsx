import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type PageProps = {
  data: ShishaLog[];
};

type ShishaLog = {
  id: number;
  title: string;
};

// const Page: NextPage<PageProps> = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const Page: NextPage<PageProps> = () => {
  const [data, setData] = useState<ShishaLog[]>(null!);

  useEffect(() => {
    fetch("/testData/shishaLog.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  return (
    data ? 
    <>
      {data.map((v, i) => (
        <Link key={i} href={`/${v.id}`}>
          <LogCard id={v.id} title={v.title} />
        </Link>
      ))}
    </>
    :
    <>
      <p>記録がありません</p>
    </>
  );
};
export default Page;

const LogCard: React.FC<ShishaLog> = ({ id, title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

// const getServerSideProps: GetServerSideProps<PageProps> = async () => {
//   const res = await fetch("/testData/shishaLog.json");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
