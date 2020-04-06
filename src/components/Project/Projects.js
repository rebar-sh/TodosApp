import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Projects() {


    const [projects, setProjects] = useState([]);


    useEffect(() => {
        loadProjects()



    }, [])

    const loadProjects = async () => {
        const result = await axios.get(`http://localhost:2000/project`)
        console.log(result)
        setProjects(result.data.reverse())


    }






    const deltUser = async id => {
        await axios.delete(`http://localhost:2000/project/${id}`)
        loadProjects();
    }





    return (

        <li className="nav-item">
            <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                {
                    projects.map((project, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="#">
                                    <span data-feather="users" >{project.name}</span>

                                    <Link className="action-btn edit-link" exact to={`/operations/${project.id}`}>Edit</Link>
                                    <Link className="action-btn delete-link" exact onClick={() => deltUser(`${project.id}`)} >Delete</Link>


                                </a>
                            </li>
                        )
                    })
                }
            </a>
        </li>
    )
}

export default Projects
