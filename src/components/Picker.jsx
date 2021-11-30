import React from "react";

export default function Picker({ head, onHeadChange }) {
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
    </div>
  );
}
