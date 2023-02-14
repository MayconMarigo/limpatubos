import "./About.styles.css";

import CelebrationIcon from "@mui/icons-material/Celebration";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";

function About() {
  return (
    <section className="about-us" id="About">
      <div className="decoration">
        <div
          style={{
            width: 450,
            minHeight: 503,
            padding: "50px 0",
            opacity: 0.7,
            backgroundImage: `url(https://socorrodesentupidora.com.br/wp-content/uploads/2021/12/socorro-desentupidora-1-1108x739-1.jpeg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: -150,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              width: "35%",
              height: "100%",
              borderLeft: "15px solid #fff",
              marginTop: -50,
              position: "absolute",
              right: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "48%",
                borderBottom: "15px solid #fff",
              }}
            />
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="max-width">
          <h2>Um Pouco Sobre Nós!</h2>
          <h3>
            A Limpa-tubos desentupidora atua a muito tempo no mercado de
            Desentupimento e Limpeza de Fossas em Geral, atrelando a estes
            serviços, também, a dedetização de insetos e o controle de
            camundongos em geral. Temos o costume de sempre atender os nossos
            clientes com agilidade e qualidade, formando novos amigos para a
            vida.
          </h3>
        </div>
        <div className="items-container">
          <div className="individual-item-container">
            <div className="item-title-container">
              <div className="icon">
                <CelebrationIcon />
              </div>
              <p>16 Anos de Experiência</p>
            </div>
            <div className="item-subtitle-container">
              <span>
                Contamos com profissionais qualificados e especializados.
              </span>
            </div>
          </div>
          <div className="individual-item-container">
            <div className="item-title-container">
              <div className="icon">
                <SupportAgentIcon />
              </div>
              <p>Atendimento e Suporte</p>
            </div>
            <div className="item-subtitle-container">
              <span>
                Temos o melhor suporte e atendimento durante e pós execução dos
                serviços.
              </span>
            </div>
          </div>
          <div className="individual-item-container">
            <div className="item-title-container">
              <div className="icon">
                <VerifiedIcon />
              </div>
              <p>Garantia Total para o Cliente</p>
            </div>
            <div className="item-subtitle-container">
              <span>
                Damos toda a segurança e garantia necessária a todos os nossos
                clientes.
              </span>
            </div>
          </div>
          <div className="individual-item-container">
            <div className="item-title-container">
              <div className="icon">
                <EngineeringIcon />
              </div>
              <p>Mão de Obra Especializada</p>
            </div>
            <div className="item-subtitle-container">
              <span>
                Temos profissionais com mão de obra especializada e de qualidade
                para te atender.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
