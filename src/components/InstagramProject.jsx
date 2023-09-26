import {Link} from 'react-router-dom'
import './styles/InstagramProject.css'

const InstagramProject = () => {
  return (
    <div className="generalContainer instagramContainer">
      <h1 className="instagramContainer-title">
        Replica de Instagram (2020).
      </h1>

      <div className="instagram-container">
        <Link
          className="instagram-container__link"
          to={{ pathname: "https://instagram-dani.vercel.app/" }}
          target="_black"
          title="Visitar"
        >
          <img
            className="instagramContainer-img"
            src="insta-1.png"
            alt="Instagram"
          />
        </Link>
        <div
          className="instagramContainer-description"
        >
          <h1 className="instagram-container__title">Instagram</h1>
          <p className="instagramContainer-description__paragraph">
            Mi proyecto está hecho con{" "}
            <span className="instagramContainer-description__span">
              React JS
            </span>{" "}
            y cuenta con:
          </p>
          <ul className="instagramContainer-ul">
            <li>Manejo de estado.</li>
            <li>User Interface.</li>
            <li>Manejo de single page apps.</li>
            <li>Llamada a APIs externas.</li>
            <li>Manejo de rutas (Route).</li>
            <li>Manejo de Portal y Modal.</li>
            <li>Implementación de componentes Stateful y Stateless.</li>
          </ul>
          <div className="projectsContainer-buttons">
            <Link
              className="projectsContainer-buttons__visit"
              to={{ pathname: "https://instagram-dani.vercel.app/" }}
              target="_black"
            >
              Visitar
            </Link>

            <Link
              className="projectsContainer-buttons__code"
              to={{
                pathname: "https://github.com/Daniel-Vasquez/instagram",
              }}
              target="_black"
            >
              Ver código
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramProject