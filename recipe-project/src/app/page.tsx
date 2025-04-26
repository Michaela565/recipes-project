export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-6xl m-5">Muska&apos;s recipes</h1>
        <div className="bg-orange-200 rounded-md p-5">
          <ul className="text-left text-neutral-950">
            <li>
              <a href="/springrolls">Better spring rolls by me</a>
            </li>
            <li>
              <a href="/sesamepasta">Simple sesame pasta</a>
            </li>
            <li>
              <a href="/teriyakitofu">Teriyaki tofu</a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
