async function getDiary(id: string) {
  if (!process.env.SHISHA_LOG_BACKEND_API) {
    throw new Error("Cannot connect api server");
  }
  const res = await fetch(process.env.SHISHA_LOG_BACKEND_API, { cache: "no-store" });
  const data: Diary[] = await res.json();

  return { data };
}

export default async function DiaryDetail({ params }: { params: { id: string } }) {
  const { data } = await getDiary(params.id);
  const test = data[Number(params.id) - 1];
  return (
    <>
      <p>
        {test.id}: {test.title}
      </p>
    </>
  );
}
