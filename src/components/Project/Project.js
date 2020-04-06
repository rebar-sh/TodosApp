import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import Projects from '../Project/Projects';






function Project({ match }) {

    let history = useHistory();
    const { id } = useParams();


    const [tasks, setTasks] = useState({
        "userId": "",
        "title": "",
        "complated": ""
    });


    const { userId, title, complated } = tasks;


    useEffect(() => {
        loadTasks();
    }, [])




    const loadTasks = async e => {

        const result = await fetch(`http://localhost:2000/tasks/${match.params.id}`);

        const tasks = await result.json();
        setTasks(tasks)

    }



    return (
        <div className="container dash">

            <ul> <li>{tasks.title}</li>
                <li>{complated}</li>
            </ul>
        </div>



    )
}

export default Project
