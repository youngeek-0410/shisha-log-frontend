import { Button } from "@mui/material";
import Link from "next/link";

const getAllDiary = async () => {
  const res = await fetch("http://localhost:3000/testData/shishaLog.json");
  const data: Diary[] = await res.json();

  return { data };
};

export default async function Home() {
  const { data } = await getAllDiary();
  return (
    <>
      {data.map((v, i) => (
        <DiaryCard key={i} id={v.id} title={v.title} />
      ))}
      <Link href="/diary/new">
        <Button variant="outlined">作成</Button>
      </Link>
    </>
  );
}

const DiaryCard: React.FC<Diary> = (props) => {
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
