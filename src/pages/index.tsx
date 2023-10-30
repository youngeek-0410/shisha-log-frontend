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
  return (
    <>
      {data ? (
        data.map((v, i) => (
          <Link key={i} href={`/${v.id}`}>
            <LogCard id={v.id} title={v.title} />
          </Link>
        ))
      ) : (
        <p>記録がありません</p>
      )}
    </>
  );
};

const LogCard: React.FC<ShishaLog> = ({ id, title }) => {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  const data = await res.json();

  return { props: { data } };
};
