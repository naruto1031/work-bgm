import { url } from "inspector";
import { hstack, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { Player } from "./components/Player";

export default function Page() {
  const data = [
    {
      title: "Lofi",
      url: [
        "https://www.youtube.com/watch?v=jfKfPfyJRdk"
      ]
    }, 
    {
      title: "ジャズ",
      url: ["https://www.youtube.com/watch?v=LnJz8iVo6CA","https://www.youtube.com/watch?v=2VrwGKAYnpM", "https://www.youtube.com/watch?v=wH-TyUFgdMs"]
    },
    {
      title: "雨の日",
      url: [
       "https://www.youtube.com/watch?v=5Q2Pc-e-8Qc&t=1242s"
      ]
    },
    {
      title: "夏の日",
      url: [
        "https://www.youtube.com/watch?v=5Q2Pc-e-8Qc&t=1242s"
      ]
    },
    {
      title: "カフェ",
      url: [
        "https://www.youtube.com/watch?v=OLl8ZgqCZyo"
      ]
    }
  ]

  return (
    <main className={css({ margin: "0 auto", textAlign: "center", w: "100vw", h:"100vh", backgroundColor: "gray.300", overflow: "auto"})}>
      <h1 className={css({fontSize: "2xl"})}>作業用BGMアプリ</h1>
      <p>今日はどんな音楽が聴きたい日？</p>
      <Player url="https://youtube.com/playlist?list=PLXrD4cv5Ic-w_W9vpv43-Y8oZWgbiZwPt&si=cfcWepiMbLjlC6IV" data={data} />
    </main>
  );
}