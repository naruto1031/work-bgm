import { hstack, vstack } from "../../styled-system/patterns";
import { Player } from "./components/Player";

export default function Page() {
  return (
    <main className={hstack({alignItems: "center", w: "100%",  h: "100vh", justifyContent: "center", backgroundColor: "gray.300"})}>
      <Player url="https://youtube.com/playlist?list=PLXrD4cv5Ic-w_W9vpv43-Y8oZWgbiZwPt&si=cfcWepiMbLjlC6IV" />
    </main>
  );
}