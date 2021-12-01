export default function Character({ head }) {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <article
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          height: 150,
          width: 150,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
    </section>
  );
}
