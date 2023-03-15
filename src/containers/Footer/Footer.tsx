import "./Footer.styles.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Footer() {
  const msg = encodeURIComponent(
    "Olá! Tenho interesse em contratar um serviço com vocês."
  );
  return (
    <footer>
      <div className="footer-container">
        <div className="divider-container">
          <h2>Desentupidora Limpa Tubos</h2>
          <div className="footer-divider" />
          <h5 style={{ maxWidth: "350px" }}>
            A melhor empresa de prestação de serviços de Londrina e Região.
          </h5>
        </div>
        <div className="divider-container">
          <h2>Navegação Interna</h2>
          <div className="footer-divider" />
          <ul>
            <li>
              <a href="#Start">Inicio</a>
            </li>
            <li>
              <a href="#About">Sobre</a>
            </li>
            <li>
              <a href="#Services">Serviços</a>
            </li>
            <li>
              <a href="#Locals">Locais de Atendimento</a>
            </li>
            <li>
              <a href="#Contact">Contato</a>
            </li>
          </ul>
        </div>
        <div className="divider-container">
          <h2>Contate nossa Equipe!</h2>
          <div className="footer-divider" />
          <div className="footer-content-container">
            <MapIcon />
            <h5>Atendimento em Londrina e Região.</h5>
          </div>
          <div className="footer-content-container">
            <PhoneIcon />
            <a href={`https://wa.me/43996281558?text=${msg}`} target="_blank">
              <h5 style={{ margin: 0 }}>(43) 99628-1558</h5>
            </a>
          </div>
          <div className="footer-content-container">
            <MarkEmailReadIcon />
            <a
              href={`mailto:nicolasmarino@gmail.com?subject=Orçamento&body=${msg}`}
              target="_blank"
            >
              <h5>Nicolasmarino@gmail.com</h5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
