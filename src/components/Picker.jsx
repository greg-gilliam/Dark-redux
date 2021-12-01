import React from "react";

export default function Picker({
  head,
  onHeadChange,
  newCatchphrase,
  setCatchphrase,
  handleClick,
}) {
  // const [head, setHead] = useState("Gelfling");

  const headPics = ["Aughra", "Gelfling", "Skeksi", "urRu"];

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
