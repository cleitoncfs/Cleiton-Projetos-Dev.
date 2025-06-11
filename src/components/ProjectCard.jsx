import { Link } from "react-router-dom";
import styles from "../assets/styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.project}>
            <h3>{project.title}</h3>
            <span>{project.description}</span>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
                <img
                    src={`/images/${project.image}`}
                    alt={`Projeto - ${project.title}`}
                    loading="lazy"
                />

                <button>Ver site</button>
            </Link>
        </div>
    );
};

export default ProjectCard;
