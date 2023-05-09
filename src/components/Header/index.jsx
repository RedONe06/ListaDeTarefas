import { Avatar } from "@mui/material";
import "./style.css";
import { useEffect, useState } from "react";
function Header() {
  const [usuario, setUsuario] = useState({ nome: "", img: "" });
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) =>
        setUsuario({
          nome: data.results[0].name.first,
          img: data.results[0].picture.large,
        })
      );
  }, []);

  return (
    <header>
      <div className="user">
        <Avatar alt="Remy Sharp" src={usuario.img} />
        <p>{usuario.nome}</p>
        <strong> | Ulbra CSL</strong>
      </div>
    </header>
  );
}

export default Header;
