import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'






function EditProject() {

    let history = useHistory();
    const { id } = useParams();

    const [projects, setProjects] = useState({

        "name": ""

    });


    const { name } = projects;



    useEffect(() => {

        loadProjects();
    }, [])




    const onInputChange = e => {
        setProjects({ ...projects, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:2000/project/${id}`, projects);
        history.push('/');
    }

    const loadProjects = async () => {
        const result = await Axios.get(`http://localhost:2000/project/${id}`);
        setProjects(result.data);
    }


    return (
        <div className="container dash">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-row">

                    <div className="form-group col-md-12">
                        <label for="project">Name</label>
                        <input onChange={e => onInputChange(e)} type="text" name="name" value={name} className="form-control" id="project" />
                    </div>

                </div>
                <button type="submit" className="btn btn-secondary">Edit</button>
            </form>
        </div >
    )
}

export default EditProject
