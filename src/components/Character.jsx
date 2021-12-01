export default function Character({ head, body, accessory }) {
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
      <article
        className="body"
        style={{
          backgroundImage: `url(./${body}-body.png)`,
          height: 150,
          width: 150,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
      <article
        className="accessory"
        style={{
          backgroundImage: `url(./${accessory}-accessory.png)`,
          height: 150,
          width: 150,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
    </section>
  );
}
