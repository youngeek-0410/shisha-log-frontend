import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import testData from "../../../public/testData/shishaLog.json";

type PageProps = {
  data: ShishaLog[];
};

const ShishaLogDetail: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  return (
    <>
      <p>
        {data.id}: {data.title}
      </p>
    </>
  );
};
export default ShishaLogDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // fetch data
  // const res = await fetch("");
  // const allData = await res.json();

  if (context.params && context.params.id && testData.length >= Number(context.params.id)) {
    const id = context.params.id;
    const data = testData[Number(id) - 1];
    return {
      props: {
        data,
      },
    };
  }
  return {
    notFound: true,
  };
};
