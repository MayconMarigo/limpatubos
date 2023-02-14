import "./Services.styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Truck from "../../assets/truck.png";
import Pipe from "../../assets/pipe.png";
import Box from "../../assets/box.png";
import Hose from "../../assets/hose.png";
import Gutters from "../../assets/gutters.png";
import Barrel from "../../assets/barrel.png";
import Bug from "../../assets/bug.png";
import WaterTank from "../../assets/water-tank.png";

function Services() {
  return (
    <section className="parallax" id="Services">
      <div className="cover" />
      <div className="inside-container">
        <div style={{ padding: "25px 0", color: "#fff" }} className="text">
          <h1>Nossos Serviços Prestados</h1>
        </div>
        <div className="box-container">
          <div className="content-box">
            <h1>Limpeza de Fossas</h1>
            <img className="inside-image" src={Truck} alt="" />
            <h3>Fazemos a limpeza de fossas sépticas em geral, contrate já.</h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Desentupimentos Gerais</h1>
            <img
              className="inside-image"
              src={Pipe}
              alt=""
              style={{ width: "60px", height: "60px", bottom: 20 }}
            />
            <h3>
              Desentupimos pias, vasos sanitários, caixas separadoras e mais.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Limpeza de Caixa de Gordura</h1>
            <img
              className="inside-image"
              src={Box}
              alt=""
              style={{ width: "60px", height: "60px", bottom: 20 }}
            />
            <h3>
              Sugamos caixas de gordura e hidrojateamos para melhor desempenho.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Hidrojateamento</h1>
            <img
              className="inside-image"
              src={Hose}
              alt=""
              style={{ width: "80px", height: "80px", bottom: 15 }}
            />
            <h3>
              Precisando de jato de alta pressão? Temos essa ferramenta
              disponível.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
        </div>
        <div className="box-container">
          <div className="content-box">
            <h1>Desobstrução de Calhas</h1>
            <img
              className="inside-image"
              src={Gutters}
              alt=""
              style={{ width: "60px", height: "60px", bottom: 15 }}
            />
            <h3>
              Limpamos e desobstruimos calhas térreas e aéreas, marque uma
              visita.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Coleta de Resíduo</h1>
            <img
              className="inside-image"
              src={Barrel}
              alt=""
              style={{ width: "60px", height: "60px", bottom: 20 }}
            />
            <h3>
              Sugamos e transportamos resíduos em geral, marque um orçamento já.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Dedetização em Geral</h1>
            <img
              className="inside-image"
              src={Bug}
              alt=""
              style={{ width: "70px", height: "70px", bottom: 10 }}
            />
            <h3>
              Dedetizamos e desinfectamos estabelecimentos em geral, ligue
              agora.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
          <div className="content-box">
            <h1>Limpeza de Caixa D'água.</h1>
            <img
              className="inside-image"
              src={WaterTank}
              alt=""
              style={{ width: "70px", height: "70px", bottom: 15 }}
            />
            <h3>
              Equipe especializada em limpeza de caixas de água e de cisternas.
            </h3>
            <ChevronRightIcon
              onClick={() => (window.location.href = "#Contact")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
