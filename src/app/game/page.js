import LinkWrapper from "../components/LinkWrapper";

export default function Game() {
  return (
    <main className="">
      <h1 className="text-xl">Game</h1>
      <div className="mb-3">
        <h2>osu!</h2>
        <LinkWrapper
          href="https://osu.ppy.sh/users/15258786"
          name="Profile Page"
        />
      </div>
      <div className="mb-3">
        <h2>Valorant</h2>
        <p>ID: Ich töte dich#osu</p>
      </div>
    </main>
  );
}
