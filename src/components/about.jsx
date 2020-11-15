import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "ReactJS_Skill", content: "React JS", porcentage: "80%", value: "80" },
        { id: "Redux", content: "Redux", porcentage: "85%", value: "85" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "NodeJS_skill", content: "Node js", porcentage: "70%", value: "70" },
        {
          id: "ExpressJS_skill",
          content: "Express JS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Firebase_skill",
          content: "Firebase",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "MongoDB_skill",
          content: "Mongo DB",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, I am a fourth year engineering student at Delhi Technological University (formerly DCE), India with engineering specialisation in Electronics and Communication Engineering. "
        },
        {
          id: "second-p-about",
          content:
            "I have always taken keen interest in coding and Web Development, and have consequently worked on my skills to build good industry level projects. I have always liked the challenge of learning a new technology, so i have worked with a wide array of technologies given the requirements of the projects. I also like solving challenging problems and have experience in Data Structures & Algorithms and SQL. I also have good understanding of computer fundamentals subjects like Operating Systems, Database Management System, Linux, System Design...."
        },
        {
          id: "third-p-about",
          content:
            "Over the course of my college education I have worked on several projects which helped me build my skills. Some of which are displayed in the work section. All necessary link of the projects such as github repositories ans live links are in the display as well. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
