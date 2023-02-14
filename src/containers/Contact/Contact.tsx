import "./Contact.styles.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PublicIcon from "@mui/icons-material/Public";
import FormImage from "../../assets/form-image.jpg";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e: any) => {
    let form = document.getElementsByTagName("form")[0];
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r6xzqml",
        "template_js6anod",
        form,
        "eofBXW4d-_tr5OjSh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Seu email foi enviado com sucesso!");
    form.reset();
  };

  const iconArray = [
    <LocationOnIcon />,
    <PhoneIcon />,
    <MarkEmailReadIcon />,
    <PublicIcon />,
  ];

  const contacts = [
    {
      id: 0,
      icon: "",
      title: "Locais Atendidos:",
      subtitle: "Londrina e Região.",
    },
    {
      id: 1,
      icon: "",
      title: "Telefone:",
      subtitle: "(43)98419-0269",
      phone: true,
    },
    ,
    {
      id: 2,
      icon: "",
      title: "Email:",
      subtitle: "Nicolasmarino@gmail.com",
      email: true,
    },
    ,
    { id: 3, icon: "", title: "Licenças Ambientais", subtitle: "IBAMA - IMA" },
  ];
  return (
    <section className="contact-section" id="Contact">
      <div className="contacts-container">
        {contacts.map((c) => (
          <div className="contact" key={c?.id}>
            <div
              className="icon-container"
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
              }}
            >
              {iconArray[c?.id as number]}
            </div>

            <h2>{c?.title}</h2>
            <h3>{c?.subtitle}</h3>
          </div>
        ))}
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail} className="form">
          <h1>Contate-nos Agora.</h1>
          <div
            className="form-width"
            style={{
              display: "flex",
              gap: "50px",
            }}
          >
            <div className="form-input">
              <h4>SEU NOME</h4>
              <input type="text" placeholder="Nome" name="from_name" />
            </div>
            <div className="form-input">
              <h4>SEU TELEFONE</h4>
              <input
                type="phone"
                placeholder="telefone"
                style={{ width: "100%" }}
                name="from_phone"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "50px",
            }}
          >
            <div className="form-input">
              <h4>SEU EMAIL</h4>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "50px",
            }}
          >
            <div className="form-input">
              <h4>SUA MENSAGEM</h4>
              <textarea placeholder="Sua mensagem" name="message" />
            </div>
          </div>
          <div className="submit-container">
            <input type="submit" value="Enviar contato" />
          </div>
        </form>
        <div className="img-form">
          <div
            style={{
              backgroundImage: `url(${FormImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "-50px",
              width: "100%",
              height: "100%",
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default Contact;
