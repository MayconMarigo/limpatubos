import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from "../../assets/limpa-tubos-logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.styles.css";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const msg = encodeURIComponent(
    "Olá! Tenho interesse em contratar um serviço com vocês."
  );
  return (
    <>
      <header className="header" id="Start">
        <div className="header-top">
          <div className="responsive-menu">
            <MenuIcon
              onClick={() => setExpanded(!expanded)}
              style={{ padding: "0 5px" }}
            />
            {expanded && (
              <div className="expanded-menu">
                <div className="mobile-phones-menu">
                  <PhoneIcon />
                  <a
                    href={`https://wa.me/43984190269?text=${msg}`}
                    target="_blank"
                  >
                    (43)98419-0269
                  </a>
                  <a
                    href={`https://wa.me/43999843838?text=${msg}`}
                    target="_blank"
                  >
                    (43)99984-3838
                  </a>
                  <a
                    href={`https://wa.me/43996281558?text=${msg}`}
                    target="_blank"
                  >
                    (43)99628-1558
                  </a>
                </div>
                <div className="mobile-links-menu">
                  <nav>
                    <ul>
                      <li>
                        <a href="#Start">INÍCIO</a>
                      </li>
                      <li>
                        <a href="#About">SOBRE</a>
                      </li>
                      <li>
                        <a href="#Services">SERVIÇOS</a>
                      </li>
                      <li>
                        <a href="#Locals">ATENDIMENTO</a>
                      </li>
                      <li>
                        <a href="#Contact">CONTATO</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <div className="phone-container">
            <PhoneIcon />
            <a href={`https://wa.me/43984190269?text=${msg}`} target="_blank">
              (43)98419-0269
            </a>
            <a href={`https://wa.me/43999843838?text=${msg}`} target="_blank">
              (43)99984-3838
            </a>
            <a href={`https://wa.me/43996281558?text=${msg}`} target="_blank">
              (43)99628-1558
            </a>
          </div>
          <div className="social-media-container">
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </header>
      <div className="header-bottom">
        <div className="logo-container">
          <img src={Logo} />
        </div>
        <div className="navigation-container">
          <nav>
            <ul>
              <li>
                <a href="#Start">INÍCIO</a>
              </li>
              <li>
                <a href="#About">SOBRE</a>
              </li>
              <li>
                <a href="#Services">SERVIÇOS</a>
              </li>
              <li>
                <a href="#Locals">ATENDIMENTO</a>
              </li>
              <li>
                <a href="#Contact">CONTATO</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
