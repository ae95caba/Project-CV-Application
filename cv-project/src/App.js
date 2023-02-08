import logo from "./logo.svg";
import "./App.scss";
import { PersonalInfo } from "./components/PersonalInfo";
import React from "react";
import { CV } from "./components/Overview";
import { useState } from "react";

import uniqid from "uniqid";

function App(props) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    subname: "",
    tittle: "",
    adress: "",
    phone: "",
    email: "",
    description: "",
  });
  const [img, setImg] = useState("");
  const [experienceArr, setExperienceArr] = useState([]);
  const [educationArr, setEducationArr] = useState([]);

  function submitPersonalInfo(e) {
    e.preventDefault();
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "inline";
    //document.getElementById("cv").style.display = "grid";

    setPersonalInfo({
      name: document.getElementById("name").value,
      subname: document.getElementById("subname").value,
      tittle: document.getElementById("tittle").value,
      adress: document.getElementById("adress").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      description: document.getElementById("description").value,
    });

    setImg(document.getElementById("img").dataset.url);
  }

  function delete3(job) {
    const index = experienceArr.findIndex((x) => x.id === job.id);
    const arr = [...experienceArr];
    arr.splice(index, 1);
    setExperienceArr(arr);
  }

  function delete2(education) {
    const index = educationArr.findIndex((x) => x.id === education.id);
    const arr = [...educationArr];
    arr.splice(index, 1);
    setEducationArr(arr);
  }

  function acceptEdit(e, job) {
    e.preventDefault();

    document.querySelector(`#${job.id} form`).style.display = "none";

    document.querySelector(`#${job.id} .edit`).style.display = "inline";

    const newJob = {};
    newJob.position = document.querySelector(`#${job.id}-position`).value;
    newJob.company = document.querySelector(`#${job.id}-company`).value;
    newJob.city = document.querySelector(`#${job.id}-city`).value;
    newJob.from = document.querySelector(`#${job.id}-from`).value;
    newJob.to = document.querySelector(`#${job.id}-to`).value;
    newJob.id = job.id;
    const index = experienceArr.findIndex((x) => x.id === job.id);
    //update de experiencie
    const arr = [...experienceArr];
    arr[index] = newJob;
    setExperienceArr(arr);
  }

  function acceptEdit2(e, education) {
    e.preventDefault();

    document.querySelector(`#${education.id} form`).style.display = "none";

    document.querySelector(`#${education.id} .edit`).style.display = "inline";

    const newEducation = {};
    newEducation.tittle = document.querySelector(
      `#${education.id}-tittle`
    ).value;
    newEducation.institute = document.querySelector(
      `#${education.id}-institute`
    ).value;
    newEducation.city = document.querySelector(`#${education.id}-city`).value;
    newEducation.from = document.querySelector(`#${education.id}-from`).value;
    newEducation.to = document.querySelector(`#${education.id}-to`).value;
    newEducation.id = education.id;
    const index = educationArr.findIndex((x) => x.id === education.id);

    const arr = [...educationArr];
    arr[index] = newEducation;
    setEducationArr(arr);
  }

  return (
    <div className="App">
      <div id="personal-information-section">
        <h2>Informacion personal</h2>
        <PersonalInfo onSubmit={submitPersonalInfo} />
      </div>

      <div id="experience-section">
        <h2>Experiencia</h2>
        {experienceArr.map((job) => {
          return (
            <div key={job.id} id={job.id} className="form-container">
              <form>
                <label htmlFor={`${job.id}-position`}>Puesto</label>
                <input id={`${job.id}-position`} /* required */ />
                <label htmlFor={`${job.id}-company`}>Compania</label>
                <input id={`${job.id}-company`} /* required */ />
                <label htmlFor="city">Ciudad</label>
                <input id={`${job.id}-city`} />
                <label htmlFor={`${job.id}-from`}>Desde</label>
                <input type="number" id={`${job.id}-from`} /* required */ />
                <label htmlFor={`${job.id}-to`}>Hasta</label>
                <input type="number" id={`${job.id}-to`} /* required */ />

                <button
                  className="accept"
                  onClick={(e) => acceptEdit(e, job)}
                  type="submit"
                  /* style={{ display: "none" }} */
                >
                  Aceptar
                </button>
              </form>

              <button
                className="edit"
                onClick={(e) => {
                  document.querySelector(`#${job.id} form`).style.display =
                    "grid";

                  e.target.style.display = "none";
                }} /// me quede aca
                style={{ display: "none" }}
              >
                Editar
              </button>
              <button className="delete" onClick={(e) => delete3(job)}>
                Borrar
              </button>
            </div>
          );
        })}
        <button
          className="add-experience"
          onClick={() => {
            const previousExperience = [...experienceArr];
            previousExperience.push({ id: uniqid() });
            setExperienceArr(previousExperience);
          }}
        >
          Aniadir experiencia
        </button>
      </div>
      <div id="education-section">
        <h2>Estudios</h2>
        {educationArr.map((education) => {
          return (
            <div
              key={education.id}
              id={education.id}
              className="form-container"
            >
              <form>
                <label htmlFor="tittle">Titulo</label>
                <input id={`${education.id}-tittle`} />
                <label htmlFor={`${education.id}-institute`}>Instituto</label>
                <input id={`${education.id}-institute`} /* required */ />
                <label htmlFor={`${education.id}-city`}>Ciudad</label>
                <input id={`${education.id}-city`} /* required */ />

                <label htmlFor={`${education.id}-from`}>Desde</label>
                <input
                  type="number"
                  id={`${education.id}-from`} /* required */
                />
                <label htmlFor={`${education.id}-to`}>Hasta</label>
                <input type="number" id={`${education.id}-to`} /* required */ />

                <button
                  className="accept"
                  onClick={(e) => acceptEdit2(e, education)}
                  type="submit"
                  /* style={{ display: "none" }} */
                >
                  Aceptar
                </button>
              </form>

              <button
                className="edit"
                onClick={(e) => {
                  document.querySelector(
                    `#${education.id} form`
                  ).style.display = "grid";

                  e.target.style.display = "none";
                }} /// me quede aca
                style={{ display: "none" }}
              >
                Editar
              </button>
              <button className="delete" onClick={(e) => delete2(education)}>
                Borrar
              </button>
            </div>
          );
        })}
        <button
          className="add-education"
          onClick={() => {
            const previousEducation = [...educationArr];
            previousEducation.push({ id: uniqid() });
            setEducationArr(previousEducation);
          }}
        >
          Aniadir estudios
        </button>
      </div>
      <CV
        personalInfo={personalInfo}
        img={img}
        experienceArr={experienceArr}
        educationArr={educationArr}
      />
    </div>
  );
}

export default App;
