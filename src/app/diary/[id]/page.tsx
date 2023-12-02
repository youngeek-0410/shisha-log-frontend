async function getDiary(id: string) {
  const res = await fetch("http://api-server:8080/", { cache: "no-store" });
  const data: Diary = await res.json();

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
