import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../../assets/limpa-tubos-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

import "./Header.styles.css";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const msg = encodeURIComponent(
    "Olá! Tenho interesse em contratar um serviço com vocês."
  );
  return (
    <>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11095764579">
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-11095764579');
      </script>

      <!-- Event snippet for WhatsApp conversion page
      In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
      <script>
      function gtag_report_conversion(url) {
      var callback = function () {
      if (typeof(url) != 'undefined') {
      window.location = url;
      }
      };
      gtag('event', 'conversion', {
      'send_to': 'AW-11095764579/_BBECLX_lKUYEOPc76op',
      'event_callback': callback
      });
      return false;
      }
      </script>
       <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQ5JCHE4M0"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DQ5JCHE4M0'); </script>
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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon />
                    <a href={`tel:+554333342273`}>(43)3334-2273</a>
                    <WhatsAppIcon style={{ marginLeft: 10 }} />
                    <a
                      href={`https://wa.me/43996281558?text=${msg}`}
                      target="_blank"
                    >
                      (43)99628-1558
                    </a>
                  </div>
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
            <a href={`tel:+554333342273`}>(43)3334-2273</a>
            <WhatsAppIcon />
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
      <div className="floating-container">
        <div
          className="floating-button"
          onClick={() => window.open(`https://wa.me/43996281558?text=${msg}`)}
        >
          <WhatsAppIcon />
          <p>Peça um orçamento!</p>
        </div>
      </div>
    </>
  );
}
export default Header;
