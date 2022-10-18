import Message from "../layouts/Message"
import {useLocation} from 'react-router-dom';

import styles from './Projects.module.css';
import LinkButton from "../layouts/LinkButton";

import Container from "../layouts/Container";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layouts/Loading";

function Projects() { 

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = ""
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(false)
        })
        .catch((err) => console.log(err))

    }, []);

    function removeProject(id) { 

        fetch(`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type": 'application/json'
            },
        }).then(resp => resp.json)
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))

    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/NovosProjetos' text='Criar Projetos'/>
            </div>

            {message && <Message type='success' msg={message}/>}
            {projectMessage && <Message type='success' msg={projectMessage}/>}
            <Container customClass='start'>

                {projects.length > 0 && projects.map((project) => 
                        <ProjectCard
                        id={project.id}
                        name={project.nome}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                        />
                    )}
                        {removeLoading && <Loading/>}
                        {removeLoading && projects.length === 0 && (
                            <p>não há projetos cadastrados!</p>
                        )}

            </Container>
        </div>
    )
}

export default Projects