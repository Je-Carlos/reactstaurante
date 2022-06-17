import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string; // string que representa o valor do input
  setBusca: React.Dispatch<React.SetStateAction<string>>; // função que atualiza o valor do input

}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca} // valor da busca
        onChange={(evento) => setBusca(evento.target.value)} // mudar o valor da busca
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}