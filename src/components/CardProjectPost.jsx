import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import Icons from "./Icons";
import "./styles/CardProjectPost.css";

const CarouselImages = lazy(() => import("./CarouselImages"));

function CardProjectPost({ project }) {
  const { title, description, technologies, link, codigo, images } = project
  return (
    <section className="projectContainer">
      <div className="projectContainer-blogs">
        <h3 className="projectContainer-blogs__title">{title}</h3>

        <div className="projectContainer-coverPage">
          <Suspense fallback={<Loading />}>
            <CarouselImages images={images} />
          </Suspense>
        </div>

        <div className="projectContainer-info">
          <h2 className="projectContainer-info__title">{title}</h2>
          <div className="projectContainer-info__paragraph">
            <div className="projectContainer-info__description">
              {description}
            </div>
            <Icons technologies={technologies} />
            <span className="projectContainer-info__span">
              *Porcentajes tomados de cada proyecto en GitHub
            </span>
          </div>
          <div className="projectContainer-links">
            <Link
              className="projectContainer-links__link effectBtn"
              to={{ pathname: link }}
              target="_blank"
            >
              <span>Visitar</span>
            </Link>

            <Link
              className="projectContainer-links__link effectBtn"
              to={{ pathname: codigo }}
              target="_blank"
            >
              <span>Ver código</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProjectPost;
