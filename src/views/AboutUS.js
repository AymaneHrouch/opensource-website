import React from "react";
import { Container } from "reactstrap";
import img1 from "../assets/1603733356037.jpg";
import img2 from "../assets/ensa.jpeg";
import img3 from "../assets/open source.jpg";
import img4 from "../assets/last.jpg";

const AboutUs = () => {
  return (
    <Container className=".container">
      <div className="heading">
        <span>À propos de nous</span>
        <hr />
      </div>
      <div className="about-us">
        <div className="lead" style={{ textAlign: "center" }}>
          <p>
            L'évènement « Open source Days » organisé par le département de
            Mathématiques et Informatique de l'École Nationale des Sciences
            Appliquées de Khouribga est une manifestation innovante qui
            rassemble les étudiants, ingénieurs et scientifiques issus des
            milieux professionnels et académiques. Dans sa 9éme édition, cette
            manifestation a pour thématique principale de mettre en avant les
            avancées récentes liées à la digitalisation, aux nouvelles tendances
            technologiques, et à l’entrepreneuriat. Plus de 600 participants
            sont attendus à l’occasion de la 9éme édition. C’est donc le bon
            endroit pour échanger des idées, partager des compétences, discuter
            et traiter des sujets et des problématiques en cohérence avec
            l’avancement des technologies, ainsi donner aux étudiants
            l’opportunités d’améliorer leurs connaissances en digitalisation et
            découvrir des nouvelles technologies
          </p>
        </div>
        <div className="vertic" />
        <div className="Gallery">
          <div className="row">
            <img src={img1} alt="" className="img" />
            <img src={img2} alt="" className="img" />
          </div>
          <div className="row">
            <img src={img4} alt="" className="img img-last" />
            <img src={img3} alt="" className="img img-last" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
