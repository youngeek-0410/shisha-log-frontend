async function getRecord(id: string) {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  // const data = await res.json();
  const datas: ShishaLog[] = await res.json();
  const data = datas[Number(id) - 1];

  return { data };
}

export default async function ShishaLogDetail({ params }: { params: { id: string } }) {
  const { data } = await getRecord(params.id);
  console.log(params.id);
  return (
    <>
      <p>
        {data.id}: {data.title}
      </p>
    </>
  );
}
