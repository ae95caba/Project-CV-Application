import React from "react";

export class CV extends React.Component {
  render() {
    return (
      <div id="cv">
        <div id="header">
          <h1>
            {this.props.personalInfo.name} {this.props.personalInfo.subname}
          </h1>
          <h2>{this.props.personalInfo.tittle}</h2>
        </div>
        <div id="content">
          <div id="description">
            <h2>Descripcion</h2>
            <p>{this.props.personalInfo.description}</p>
          </div>
          <div id="experience">
            <h2>Experiencia</h2>
            {this.props.experienceArr.map((job) => {
              return (
                <div className="job" key={job.id}>
                  <div className="left">
                    <span>
                      {job.from} - {job.to}
                    </span>
                  </div>
                  <div className="right">
                    <p>{job.position}</p>
                    <p>
                      {job.company},{job.city}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="education">
            <h2>Educacion</h2>
            {this.props.educationArr.map((education) => {
              return (
                <div className="job" key={education.id}>
                  <div className="left">
                    <span>
                      {education.from} - {education.to}
                    </span>
                  </div>
                  <div className="right">
                    <p>{education.tittle}</p>
                    <p>
                      {education.institute},{education.city}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="sidebar">
          <img src={this.props.img} alt="you" width="100px" height="100px" />
          <h2>Datos personales</h2>
          <h3>Direccion</h3>
          <p>{this.props.personalInfo.adress}</p>
          <h3>Telefono</h3>
          <p>{this.props.personalInfo.phone}</p>
          <h3>Email</h3>
          <p>{this.props.personalInfo.email}</p>
        </div>
      </div>
    );
  }
}
