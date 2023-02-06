import React from "react";

export class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form id="personal-info" onSubmit={this.props.onSubmit}>
          <h2>Informacion personal</h2>

          <label htmlFor="name">Nombre</label>
          <input id="name" /* required */ />
          <label htmlFor="subname">Apellido</label>
          <input id="subname" /* required */ />
          <label htmlFor="tittle">Profesion</label>
          <input id="tittle" />
          <label htmlFor="adress">Localidad</label>
          <input id="adress" /* required */ />
          <label htmlFor="phone">Telefono</label>
          <input type="number" id="phone" /* required */ />
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
          <label htmlFor="description">Breve descripcion</label>
          <input id="description" />
          <input
            id="img"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                e.target.dataset.url = URL.createObjectURL(e.target.files[0]);
              }
            }}
          />
          <button type="submit">Aniadir</button>
        </form>
        <button
          onClick={(e) => {
            e.target.style.display = "none";
            document.getElementById("personal-info").style.display = "grid";
          }}
          style={{ display: "none", width: "100%" }}
        >
          Editar
        </button>
      </div>
    );
  }
}
