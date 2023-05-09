import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Card from "../Card";
import "./style.css";

function Content() {
  const [tarefas, setTarefas] = useState([]);
  const [nomeTarefa, setNomeTarefa] = useState("Tarefa");

  function adicionarTarefa() {
    const novaTarefa = {
      nome: nomeTarefa,
      hora: new Date().toLocaleTimeString(
        "pt-br",
        { hour: "2-digit", minute: "2-digit", second: "2-digit" },
        { timeZone: "America/Sao_Paulo" }
      ),
    };

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);
  }

  return (
    <div className="content">
      <section className="input">
        <h1>Lista de tarefas</h1>
        <div className="insert">
          <TextField
            label={"Insira uma tarefa"}
            id="margin-dense"
            margin="dense"
            onChange={(event) => setNomeTarefa(event.target.value)}
          />

          <Button
            variant="contained"
            size="medium"
            id="btnAdicionar"
            onClick={adicionarTarefa}
          >
            Adicionar
          </Button>
        </div>
      </section>
      <section className="list">
        {tarefas.map((tarefa) => (
          <Card key={tarefa.hora} nome={tarefa.nome} horario={tarefa.hora} />
        ))}
      </section>
    </div>
  );
}

export default Content;
