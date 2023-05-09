import Chip from "@mui/material/Chip";
import "./style.css";
import { Checkbox } from "@mui/material";
import { useState } from "react";

function Card({ nome, horario }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="card" id="card">
      <div className="left">
        <Checkbox checked={checked} onChange={handleChange} />
        <p>{nome}</p>
      </div>
      <Chip label={horario} id="hora" />
    </div>
  );
}

export default Card;
