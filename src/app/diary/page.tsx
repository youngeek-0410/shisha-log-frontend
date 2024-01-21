import { Button } from "@mui/material";
import Link from "next/link";

const getAllDiary = async () => {
  const res = await fetch(process.env.SHISHA_LOG_BACKEND_API + "diary", { method: "GET", cache: "no-store" });
  const allDiary: Diary[] = await res.json();

  return { allDiary };
};

export default async function Home() {
  const { allDiary } = await getAllDiary();
  return (
    <>
      {allDiary && allDiary.map((diary) => <DiaryCard key={diary.id} id={diary.id} title={diary.title} />)}

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
