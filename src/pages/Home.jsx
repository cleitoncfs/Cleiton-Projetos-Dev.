import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "../assets/styles/global.css";

const Home = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((project) =>
                  project.tags?.includes(filter.toLowerCase())
              );

    return (
        <div id="container">
            <main>
                <section>
                    <div className="filter-controls">
                        <button onClick={() => setFilter("all")}>Todos</button>
                        <button onClick={() => setFilter("react")}>
                            React
                        </button>
                        <button onClick={() => setFilter("python")}>
                            Python
                        </button>
                        <button onClick={() => setFilter("php")}>PHP</button>
                        <button onClick={() => setFilter("javascript")}>
                            JavaScript
                        </button>
                        <button onClick={() => setFilter("html")}>
                            HTML/CSS
                        </button>
                        <button onClick={() => setFilter("bootstrap")}>
                            Bootstrap
                        </button>
                    </div>

                    <div className="projects-gallery">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
