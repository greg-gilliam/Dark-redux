export default function Character({ head }) {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <article
        className="head"
        stle={{
          backgroundImage: `url(./${head}-head.png)`,
          height: 100,
          width: 100,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
    </section>
  );
}
