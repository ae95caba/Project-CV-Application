import React from "react";

export function CV(props) {
  return (
    <div id="cv">
      <div id="header">
        <h1>
          {props.personalInfo.name} {props.personalInfo.subname}
        </h1>
        <h2>{props.personalInfo.tittle}</h2>
      </div>
      <div id="content">
        <div id="description">
          <h2>Descripcion</h2>
          <p>{props.personalInfo.description}</p>
        </div>
        <div id="experience">
          <h2>Experiencia</h2>
          {props.experienceArr.map((job) => {
            return (
              <div className="job" key={job.id}>
                <div className="left">
                  <p>
                    {job.from} - {job.to}
                  </p>
                </div>
                <div className="right">
                  <p>{job.position}</p>
                  <p>
                    {job.company}, {job.city}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div id="education">
          <h2>Educacion</h2>
          {props.educationArr.map((education) => {
            return (
              <div className="education" key={education.id}>
                <div className="left">
                  <p>
                    {education.from} - {education.to}
                  </p>
                </div>
                <div className="right">
                  <p>{education.tittle}</p>
                  <p>
                    {education.institute}, {education.city}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="sidebar">
        <img src={props.img} alt="you" />
        <h2>Datos personales</h2>
        <h3>Direccion</h3>
        <p>{props.personalInfo.adress}</p>
        <h3>Telefono</h3>
        <p>{props.personalInfo.phone}</p>
        <h3>Email</h3>
        <p>{props.personalInfo.email}</p>
      </div>
    </div>
  );
}
