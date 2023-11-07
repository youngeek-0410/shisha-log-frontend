async function getRecord() {
  // fetch data
  // const res = await fetch("");
  // const allData = await res.json();
  const test = {
    id: 1,
    title: "test",
  };
  return test;
}

export default async function ShishaLogDetail() {
  const record = await getRecord();
  return (
    <>
      <p>
        {record.id}: {record.title}
      </p>
    </>
  );
}

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
