import React from "react";

export default function Picker({
  head,
  onHeadChange,
  newCatchphrase,
  setCatchphrase,
  handleClick,
  body,
  onBodyChange,
  accessory,
  onAccessoryChange,
}) {
  // const [head, setHead] = useState("Gelfling");
  // const [body, setBody] = useState("Gelfling");
  // const [accessory, setAccessory] = useState("Shard");

  const headPics = ["Aughra", "Gelfling", "Skeksi", "urRu"];
  const bodyPics = ["Aughra", "Gelfling", "Skeksi", "urRu"];
  const accessoryPics = ["Shard", "Sword", "Fizzgig"];

  return (
    <div>
      <label>
        Head
        <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
          {headPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>
      <label>
        Body
        <select value={body} onChange={(e) => onBodyChange(e.target.value)}>
          {bodyPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>
      <label>
        Accessorize!
        <select
          value={accessory}
          onChange={(e) => onAccessoryChange(e.target.value)}
        >
          {accessoryPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>
      <label>
        Add a catchphrase:
        <input
          type="text"
          value={newCatchphrase}
          onChange={(e) => setCatchphrase(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Add catchphrase to your list!
      </button>
    </div>
  );
}
