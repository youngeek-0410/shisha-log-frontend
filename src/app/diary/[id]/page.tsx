async function getDiary(id: string) {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  // const data = await res.json();
  const datas: Diary[] = await res.json();
  const data = datas[Number(id) - 1];

  return { data };
}

export default async function DiaryDetail({ params }: { params: { id: string } }) {
  const { data } = await getDiary(params.id);
  return (
    <>
      <p>
        {data.id}: {data.title}
      </p>
    </>
  );
}
