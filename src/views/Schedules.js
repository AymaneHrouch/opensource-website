import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Transition } from "react-transition-group";
import { Link } from "react-scroll";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const schedule = [
  {
    date: {
      day: "16",
      month: "MaI",
    },
    events: [
      {
        start: "08:30",
        end: "09:00",
        title: "Acceuil des invités",
      },
      
      {
        start: "09:00",
        end: "09:45",
        title: "Mots d’ouverture",
        speakers: [
          {
            name: "Ministre.",
            post: "",
          },
          {
            name: "Monsieur le gouverneur de la province Khouribga.",
            post: "",
          },
          {
            name: "M.Hmina Nabil",
            post: "Président de l’université Moulay Slimane.",
          },
          {
            name: "M.SAJIEDDINE Mohammed",
            post: "Directeur de l’ENSA KHOURIBGA.",
          },
          {
            name: "M.HAFIDI Imad",
            post: "Fondateur d’Open source Days.",
          },
          {
            name: "Mme.Salma EL FADILI",
            post: "Président de comité organisateur.",
          },
        ],
      },
      {
        start: "9:45",
        end: "10:15",
        title: "Keynote d’ouverture : Leader de Microsoft",
        speakers: [
          {
            name: "",
            post: "",
          },
        ],
      },
      {
        start: "10:15",
        end: "11:30",
        title: "Conférence 1 : ",
        speakers: [
          {
            name: "Mahdi Challigui:",
            post: "le role des datacenter en tant qu’une infrastructure sinquanone à la digitalisation.",
          },
        ],
      },
      {
        start: "11:30",
        end: "12:00",
        title:
          'Lancement hackaton: Par Hack and Pitch et la StartUp Factory',
        speakers: [
          {
            name: "",
            post: "",
          },
        ],
      },
      {
        start: "12:30",
        end: "14:00",
        title: "Pause déjeuner",
      },
      {
        start: "14:00",
        end: "14:15",
        title: "Visite des locaux de la compétition",
        
      },
      {
        start: "14:15",
        end: "15:45",
        title: "Lancement des atelier de formation :",
        speakers: [
          {
            name: "Nadiaa Naanaa:",
            post: "Le Self service BI:enjeux et outils.",
          },
        ],
      },
      {
        start: "15:45",
        end: "16:00",
        title: "Pause café",
      },
      {
        start: "16:00",
        end: "17:00",
        title: "Suite des ateliers des formations :",
        speakers: [
          {
            name: "Amina Moumni:",
            post: "Projet professional.",
          },
        ],
      },
      {
        start: "17:00",
        end: "",
        title: "Cloture des ateliers, et visite du lieu de hackaton",
      },
    ],
    
  },
  
  {
    date: {
      day: "17",
      month: "Mai",
    },
    events: [
      {
        start: "08:30",
        end: "09:00",
        title: "Acceuil des invites",
      },
      {
        start: "09:00",
        end: "09:15",
        title:
          'Keynote d’ouverture par notre Sponsors Officiel',
      },
      {
        start: "09:15",
        end: "10:00",
        title: "Conférence 1 :",
        speakers: [
          {
            name: "Badr Boussabat:",
            post: "Metavers et IA: un futur inclusif",
          },
        ],
      },
      {
        start: "10:00",
        end: "10:45",
        title:
          'Conférence 2',
        speakers: [
          {
            name: "Amadou Diawara",
            post: "l’intelligence collectif ",
          },
        ],
      },
      {
        start: "10:45",
        end: "11:15",
        title: "Pause café",
      },
      {
        start: "11:15",
        end: "12:00",
        title: "Conférence 3 :",
        speakers: [
          {
            name: "Larbi Ouiyzme :",
            post: "le cloud et le Big Data au service des objets connectés",
          },
        ],
      },
      {
        start: "12:00",
        end: "12:30",
        title: 'Fin des conférences',
        
      },
      {
        start: "12:30",
        end: "14:00",
        title: "Pause déjeuner ",
      },
      {
        start: "14:00",
        end: "16:00",
        title: "Table ronde :",
        speakers: [
          {
            name: "Zouhri amine",
            post: "",
          },
          {
            name: "Prof Chawki",
            post: "",
          },
          {
            name: "Adil Taouil",
            post: "",
          },
          {
            name: "nahed Rachad",
            post: "",
          },
        ],
      },
      {
        start: "16:00",
        end: "16:15",
        title: "Pause café",
      },
      {
        start: "16:15",
        end: "17:30",
        title: "Session partage d’expérience avec les Chairs des 9 dernières Edition d’Open source Days",
      },
      {
        start: "17:30",
        end: "18:00",
        title: "Cloture de la compétition",
      },
      {
        start: "18:00",
        end: "",
        title: "Cérémonie de Cloture (pause musicale) et remise des prix du hackaton Open Data",
      },
    ],
  },
];

const Schedules = () => {
  const [day, setDay] = useState(0);
  const [inProp, setInProp] = useState(true);
  return (
    <div className="schedules">
      <Container>
        <div className="schedules-days">
          <div
            className={"button " + (day ? "primary-stroke" : "primary-fill")}
            onClick={() => {
              setInProp(false);
              setTimeout(() => {
                setInProp(true);
                setDay(0);
              }, duration);
            }}
          >
            1er jour
          </div>
          <div
            className={"button " + (!day ? "primary-stroke" : "primary-fill")}
            onClick={() => {
              setInProp(false);
              setTimeout(() => {
                setInProp(true);
                setDay(1);
              }, duration);
            }}
          >
            2ème jour
          </div>
        </div>
        <div className="schedules-schedules">
          <div className="date">
            <div className="day">{schedule[day].date.day}</div>
            <div className="month">{schedule[day].date.month}</div>
          </div>
          <div className="events">
            {schedule[day].events.map((event, key) => (
              <Transition timeout={duration} key={key} in={inProp}>
                {(state) => (
                  <div
                    className="event"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <Container>
                      <Row>
                        <Col md={4}>
                          <div className="time">
                            <span>{event.start}</span> -{" "}
                            <span>{event.end}</span>
                          </div>
                        </Col>
                        <Col>
                          <div className="event-event">
                            <div className="title">{event.title}</div>
                            {event.speakers ? (
                              <div className="speakers">
                                {event.speakers.map((speaker, k) => (
                                  <div className="speaker" key={k}>
                                    <span className="name">
                                      {speaker.name}
                                      {speaker.post === "" ? "" : ": "}
                                    </span>
                                    <span className="post">{speaker.post}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                )}
              </Transition>
            ))}
          </div>
        </div>
        <div className="schedules-days">
          <Link to="schedules" smooth={true} duration={500} containerId="root">
            <div
              className={"button " + (day ? "primary-stroke" : "primary-fill")}
              onClick={() => {
                setInProp(false);
                setTimeout(() => {
                  setInProp(true);
                  setDay(0);
                }, duration);
              }}
            >
              1er jour
            </div>
          </Link>
          <Link to="schedules" smooth={true} duration={500} containerId="root">
            <div
              className={"button " + (!day ? "primary-stroke" : "primary-fill")}
              onClick={() => {
                setInProp(false);
                setTimeout(() => {
                  setInProp(true);
                  setDay(1);
                }, duration);
              }}
            >
              2ème jour
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Schedules;
