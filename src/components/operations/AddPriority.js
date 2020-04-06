import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'






function AddPriority() {

    let history = useHistory();

    const [priority, setPriority] = useState({

        "name": ""

    });


    const { name } = priority;


    const onInputChange = e => {
        setPriority({ ...priority, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post('http://localhost:2000/priority', priority);
        history.push('/');
    }


    return (
        <div className="container dash">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-row">

                    <div className="form-group col-md-12">
                        <label for="priority">Name</label>
                        <input onChange={e => onInputChange(e)} type="text" name="name" value={name} className="form-control" id="priority" />
                    </div>

                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div >
    )
}

export default AddPriority