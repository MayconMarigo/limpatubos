import { useEffect, useState } from "react";
import "./Locals.style.css";

import Residencial from "../../assets/residencial.png";
import Comercial from "../../assets/comercial.png";
import Industrial from "../../assets/industrial.png";
import Publico from "../../assets/publicos.png";
import Condominio from "../../assets/condominios.png";

interface ILocals {
  img: string;
  title: string;
  subtitle: string;
}

function Locals() {
  const choices = [
    {
      id: 0,
      img: Residencial,
      title: "Serviços em Condomínio",
      name: "Residencial",
      subtitle:
        "Prestamos todos os tipos de serviços atrelado a sucção, jato de água em alta pressão, desetupimento e dedetização em residências, com total segurança ao executar.",
    },
    {
      id: 1,
      img: Comercial,
      title: "Serviços em Comércios",
      name: "Comercial",
      subtitle:
        "Temos mão de obra especializada para a realização de sucção, jato de água em alta pressão, desentupimento e dedetização em mercados, mercearias, padarias e muito mais.",
    },
    {
      id: 2,
      img: Industrial,
      title: "Serviços em Industrias",
      name: "Industrial",
      subtitle:
        "Prestamos todos os tipos de serviços atrelados a sucção, jato de água em alta pressão, desentupimento e dedetização em industrias, contate-nos.",
    },
    {
      id: 3,
      img: Publico,
      title: "Serviços em Locais Públicos",
      name: "Públicos",
      subtitle:
        "Trabalhamos com todos os tipos de serviços atrelados a sucção, jato de água em alta pressão, desentupimento e dedetização em locais públicos, administrado pelo Estado.",
    },
    {
      id: 4,
      img: Condominio,
      title: "Serviços em Condomínio",
      name: "Condomínios",
      subtitle:
        "Prestamos todos os tipos de serviços atrelados a sucção, jato de água em alta pressão, desentupimento e dedetização em Condomínio Fechado, com descontos exclusivos de até 50%.",
    },
  ];
  const [local, setLocal] = useState<ILocals>({
    img: choices[0]?.img,
    title: choices[0]?.title,
    subtitle: choices[0]?.subtitle,
  });

  const switchFocus = (id: number) => {
    let btn = document.getElementsByClassName("focused");
    if (btn) btn[0]?.classList.remove("focused");

    document.getElementById(`button-${id}`)?.classList.add("focused");
  };

  useEffect(() => {
    document.getElementById(`button-0`)?.click();
  }, []);

  return (
    <section className="locals-section" id="Locals">
      <h1>Locais que Atendemos</h1>

      <div className="content-container">
        <div className="img-container">
          <img src={local.img} alt="" />
          <h2>{local.title}</h2>
          <h3>{local.subtitle}</h3>
        </div>
        <div className="choice-container">
          {choices.map((c) => (
            <button
              key={c.id}
              id={`button-${c.id}`}
              onClick={() => {
                switchFocus(c.id);
                setLocal({ img: c.img, title: c.title, subtitle: c.subtitle });
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Locals;
