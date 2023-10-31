import { Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";

type PageProps = {
  data: ShishaLog[];
};

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  return (
    <>
      <ShishaLogList data={data} />
    </>
  );
};
export default Page;

const ShishaLogList: React.FC<PageProps> = ({ data }) => {
  return <>{data ? data.map((v, i) => <LogCard key={i} id={v.id} title={v.title} />) : <p>記録がありません</p>}</>;
};

const LogCard: React.FC<ShishaLog> = (props) => {
  return (
    <div>
      <Link key={props.id} href={`/log/${props.id}`}>
        <Text color="secondary">
          {props.id}: {props.title}
        </Text>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  const data = await res.json();

  return { props: { data } };
};
