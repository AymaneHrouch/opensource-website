import React, { useState } from "react";
import "../sass/LandingPage.scss";
import Particles from "../components/Particles";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import AboutUS from "./AboutUS";
import Team from "./Team";
import Tickets from "./Tickets";
import Schedules from "./Schedules";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";
import StreamLinks from "./StreamLinks";
import Counter from "../components/Counter";
import { ChevronsDown, Youtube } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-scroll";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Confetti from "react-confetti";

const LandingPage = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="landing-page">
            <div id="home"></div>
            <NavBar />
            <div className="section-one">
                <Container>
                    <Confetti numberOfPieces={100}/>
                    <Row>
                        <Col md={8}>
                            <div className="content">
                                <div className="welcome">Bienvenue chez Open Source Days 10.0</div>
                                <div className="head-line">A decade of Open Source:<br />Visualization, innovation and dedication</div>
                                <div className="button primary-stroke watch" onClick={() => setOpen(true)}>
                                    <Youtube color="#d63031" />
                                    <span>Voir la vidéo</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Counter />
                        </Col>
                    </Row>
                </Container>
                <div className="scroll-down">
                    <Link to="about" smooth={true} duration={500} containerId="root">
                        <ChevronsDown color="#d63031" />
                        <span>Défiler vers le bas</span>
                    </Link>
                </div>
            </div>
            <div className="section" id="streamLinks">
                <StreamLinks />
            </div>
            <div className="section" id="about">
                <AboutUS />
            </div>
            <div className="section" id="speakers">
                <Speakers />
            </div>
            <div className="section" id="schedules">
                <Schedules />
            </div>
            <div className="section" id="tickets">
                <Tickets />
            </div>
            <div className="section" id="team">
                <Team />
            </div>
            <div className="section" id="sponsors">
                <Sponsors />
            </div>
            <Footer />
            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="fjMFarSzysk" onClose={() => setOpen(false)} />
        </div>
    );
};

export default LandingPage;
