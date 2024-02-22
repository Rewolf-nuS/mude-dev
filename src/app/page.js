import Link from "next/link";
import LinkWrapper from "./components/LinkWrapper";

export default function Home() {
  return (
    <main className="">
      <h2>開発めんどい()</h2>
      <ul>
        <h3>Social Links</h3>
        <li>
          <LinkWrapper
            href="https://twitter.com/Nemui_mude"
            name="X(旧Twitter)"
          />
        </li>
        <li>
          <LinkWrapper href="https://www.twitch.tv/mude_jp" name="Twitch" />
        </li>
        <li>
          <LinkWrapper href="http://www.youtube.com/@mude_jp" name="Youtube" />
        </li>
      </ul>
    </main>
  );
}
