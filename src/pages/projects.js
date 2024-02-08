

import Project from "../components/project/Project"
import project02 from "./../img/projects/02.jpg"
import project03 from "./../img/projects/04.jpg"
import project04 from "./../img/projects/04.jpg"
import project05 from "./../img/projects/05.jpg"
import project06 from "./../img/projects/06.jpg"

import { projects } from "../helpers/projectsList"




const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Проекты</h2>
                    <ul className="projects">

                        {projects.map((project, index, link) => {
                            return <Project key={index}
                             title={project.title} 
                             img={project.img} 
                             index={index}
                            />;
                        })}



                    </ul>
                </div>
            </main>

        </>);
}

export default Projects;