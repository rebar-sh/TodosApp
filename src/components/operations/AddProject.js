import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'






function AddProject() {

    let history = useHistory();

    const [projects, setProjects] = useState({

        "name": ""

    });


    const { name } = projects;


    const onInputChange = e => {
        setProjects({ ...projects, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post('http://localhost:2000/project', projects);
        history.push('/');
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
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div >
    )
}

export default AddProject
