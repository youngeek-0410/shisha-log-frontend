import { Button } from "@mui/material";
import Link from "next/link";

const getRecord = async () => {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  const data: ShishaLog[] = await res.json();

  return { data };
};

export default async function Page() {
  const { data } = await getRecord();
  return (
    <>
      {data.map((v, i) => (
        <LogCard key={i} id={v.id} title={v.title} />
      ))}
      {/* <ShishaLogList data={records} /> */}
      <Link href="/diary/new">
        <Button variant="outlined">作成</Button>
      </Link>
    </>
  );
}

// const ShishaLogList: React.FC<PageProps> = ({ data }) => {
//   return <>{data ? data.map((v, i) => <LogCard key={i} id={v.id} title={v.title} />) : <p>記録がありません</p>}</>;
// };

const LogCard: React.FC<ShishaLog> = (props) => {
  return (
    <div>
      <Link key={props.id} href={`/diary/${props.id}`}>
        <p>
          {props.id}: {props.title}
        </p>
      </Link>
    </div>
  );
};

// type PageProps = {
//   data: ShishaLog[];
// };

// const ShishaLogDetail: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
//   return (
//     <>
//       <p>
//         {data.id}: {data.title}
//       </p>
//     </>
//   );
// };
// export default ShishaLogDetail;

// export const getServerSideProps: GetServerSideProps = async (context) => {
// fetch data
// const res = await fetch("");
// const allData = await res.json();

//   if (context.params && context.params.id && testData.length >= Number(context.params.id)) {
//     const id = context.params.id;
//     const data = testData[Number(id) - 1];
//     return {
//       props: {
//         data,
//       },
//     };
//   }
//   return {
//     notFound: true,
//   };
// };
