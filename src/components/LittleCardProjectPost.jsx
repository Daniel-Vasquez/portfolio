import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/LittleCardProjectPost.css";

function LittleCardProjectPost({ projects }) {
  return (
    <div className="cardProject">
      {projects.map(({ id, img, title, description, path, link }) => {
        return (
          <motion.div
            className="cardProject-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={id}
          >
            <div className="cardProject-img">
              <span className="cardProject-img-sapn">
                <img
                  className="cardProject-img-sapn__img"
                  src={img} alt={title}
                />
              </span>
            </div>
            <div className="cardProject-info">
              <p className="cardProject-title">{title}</p>
              <div className="cardProject-description">
                {description.props.children[0] ?? description}
              </div>
              <div className="cardProject-links">
                <Link
                  className="cardProject-links-btn__details"
                  to={`/project/${path}`}
                  title="Ver detalles del proycto"
                >
                  Detalles
                </Link>
                <Link
                  className="cardProject-links-btn__visit"
                  to={{ pathname: link }}
                  target="_black"
                  title="Visitar"
                >
                  Visitar
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default LittleCardProjectPost;
